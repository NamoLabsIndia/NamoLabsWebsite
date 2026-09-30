const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');
async function test() {
  const accountId = '361246d2529c9324af1bacc33d2adfb8';
  const accessKeyId = '3b81ce73a993ff31acfe19a2c470aefe';
  const secretAccessKey = 'ae7c22c18134ffadc2ff6e1334d1c03ecb744b4524841bfb8992503021f8aebd';
  const bucket = 'namolabscareers';
  const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });

  const res = await s3.send(new ListObjectsV2Command({ Bucket: bucket, Prefix: 'resumes/' }));
  console.log('Got', res.Contents?.length, 'items');
}
test();
