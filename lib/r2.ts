/**
 * Cloudflare R2 uploader.
 *
 * R2 is S3-compatible, so we use the AWS SDK's S3Client pointed at the R2 endpoint.
 * Endpoint format: https://<ACCOUNT_ID>.r2.cloudflarestorage.com
 *
 * Required env vars:
 *   CF_R2_ACCOUNT_ID     — Cloudflare account ID
 *   CF_R2_ACCESS_KEY_ID  — R2 API token Access Key ID
 *   CF_R2_SECRET_KEY     — R2 API token Secret Access Key
 *   CF_R2_BUCKET         — R2 bucket name (e.g. namolabs-resumes)
 *   CF_R2_PUBLIC_URL     — Optional public URL prefix if bucket has a custom domain
 *                          e.g. https://resumes.namolabs.in
 */
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

function getR2Client(): S3Client {
  const accountId = process.env.CF_R2_ACCOUNT_ID;
  const accessKeyId = process.env.CF_R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.CF_R2_SECRET_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error('Missing Cloudflare R2 environment variables (CF_R2_ACCOUNT_ID, CF_R2_ACCESS_KEY_ID, CF_R2_SECRET_KEY).');
  }

  return new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
}

/**
 * Uploads a resume PDF to Cloudflare R2 and returns the object key.
 *
 * Key format: resumes/{role}/{YYYY-MM-DD}/{sanitised-name}-{timestamp}.pdf
 */
export async function uploadResumeToR2(
  buffer: Buffer,
  filename: string,
  role: string,
): Promise<string> {
  const bucket = process.env.CF_R2_BUCKET;
  if (!bucket) throw new Error('CF_R2_BUCKET environment variable is not set.');

  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const timestamp = Date.now();
  const safeRole = role ? role.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase() : 'open';
  const key = `resumes/${safeRole}/${date}/${filename.replace('.pdf', '')}-${timestamp}.pdf`;

  const client = getR2Client();

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: 'application/pdf',
      // Metadata for easy filtering in the R2 dashboard
      Metadata: {
        filename,
        role: safeRole,
        uploaded: new Date().toISOString(),
      },
    }),
  );

  return key;
}

/**
 * Returns a URL for the stored object.
 * If CF_R2_PUBLIC_URL is set (custom domain / public bucket), use that.
 * Otherwise return the key path only (you'd generate a pre-signed URL for access).
 */
export function getResumeUrl(key: string): string {
  const publicBase = process.env.CF_R2_PUBLIC_URL?.replace(/\/$/, '');
  return publicBase ? `${publicBase}/${key}` : key;
}
