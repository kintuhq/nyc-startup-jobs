import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
})

const BUCKET_NAME = process.env.R2_BUCKET_NAME || 'datahire'

export async function uploadLogo(file: File, companyId: string): Promise<string> {
  const fileExtension = file.name.split('.').pop()
  // Generate unique filename with timestamp to avoid conflicts
  const timestamp = Date.now()
  const fileName = `logos/${companyId}-${timestamp}.${fileExtension}`

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: await file.arrayBuffer(),
    ContentType: file.type,
  })

  await s3Client.send(command)

  return `${process.env.R2_PUBLIC_URL}/${fileName}`
}

export async function deleteLogo(logoUrl: string): Promise<void> {
  if (!logoUrl.startsWith(process.env.R2_PUBLIC_URL!)) return

  const fileName = logoUrl.replace(`${process.env.R2_PUBLIC_URL}/`, '')

  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
  })

  await s3Client.send(command)
}

export async function getUploadUrl(companyId: string, fileType: string, jobId?: string): Promise<{ uploadUrl: string; fileUrl: string }> {
  const fileExtension = fileType.split('/')[1]

  // Use job-specific filename if jobId is provided, otherwise use company-based filename with timestamp
  const timestamp = Date.now()
  const fileName = jobId
    ? `logos/job-${jobId}.${fileExtension}`
    : `logos/${companyId}-${timestamp}.${fileExtension}`

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
    ContentType: fileType,
  })

  try {
    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
    const fileUrl = `${process.env.R2_PUBLIC_URL}/${fileName}`

    return { uploadUrl, fileUrl }
  } catch (error) {
    console.error('Error generating signed URL:', error)
    throw error
  }
}