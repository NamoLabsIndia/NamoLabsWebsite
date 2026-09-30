import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== 'Bearer namolabs2026namoj') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { data: dbData, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });

    let finalData = dbData || [];

    // Fallback to Cloudflare R2 if Supabase returns empty (e.g. due to RLS / Publishable Key issue)
    if (finalData.length === 0) {
      try {
        const accountId = process.env.CF_R2_ACCOUNT_ID;
        const accessKeyId = process.env.CF_R2_ACCESS_KEY_ID;
        const secretAccessKey = process.env.CF_R2_SECRET_KEY;
        const bucket = process.env.CF_R2_BUCKET;

        if (accountId && accessKeyId && secretAccessKey && bucket) {
          const s3 = new S3Client({
            region: 'auto',
            endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
            credentials: { accessKeyId, secretAccessKey },
          });

          const res = await s3.send(new ListObjectsV2Command({ Bucket: bucket, Prefix: 'resumes/' }));
          
          if (res.Contents && res.Contents.length > 0) {
            // Use Promise.all to generate signed URLs for all objects
            finalData = await Promise.all(res.Contents.map(async (obj, i) => {
              const parts = obj.Key ? obj.Key.split('/') : [];
              const role = parts.length > 1 ? parts[1].replace(/-/g, ' ') : 'Unknown';
              const filename = parts.length > 0 ? parts[parts.length - 1] : 'Resume';
              const namePart = filename.split('-17')[0]; // simple split to get name before timestamp
              
              let signedUrl = '';
              if (obj.Key) {
                const getObjCmd = new GetObjectCommand({ Bucket: bucket, Key: obj.Key });
                signedUrl = await getSignedUrl(s3, getObjCmd, { expiresIn: 3600 }); // 1 hour expiry
              }

              return {
                id: `r2-${i}`,
                full_name: namePart.replace(/_/g, ' '),
                email: 'Pulled from R2 Storage directly',
                phone: 'See PDF',
                role: role,
                created_at: obj.LastModified ? obj.LastModified.toISOString() : new Date().toISOString(),
                resume_url: signedUrl,
                linkedin: null,
                github: null,
              };
            }));
            // Sort newest first
            finalData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
          }
        }
      } catch (r2Err) {
        console.error("R2 Fallback Error:", r2Err);
      }
    }

    if (error && finalData.length === 0) {
      console.error("Supabase Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(finalData);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
