import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl as awsGetSignedUrl } from '@aws-sdk/s3-request-presigner';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import dotenv from 'dotenv';

dotenv.config();

/**
 * AWS S3 Configuration
 * Automatically uses AWS IAM roles if running on AWS Elastic Beanstalk
 * Falls back to access keys from .env for local development
 */

const s3Config = {
  region: process.env.AWS_REGION || 'us-east-1',
};

// Only set credentials if running locally
if (process.env.NODE_ENV === 'development') {
  if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    s3Config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };
  }
}

// Create S3 client
const s3Client = new S3Client(s3Config);

/**
 * Upload file to S3
 */
export const uploadToS3 = async ({ Key, Body, ContentType }) => {
  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `${process.env.NODE_ENV}/${Key}`,
      Body,
      ContentType,
      ACL: 'public-read',
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    const location = `https://${params.Bucket}.s3.${s3Config.region}.amazonaws.com/${params.Key}`;

    return {
      success: true,
      url: location,
      key: params.Key,
    };
  } catch (error) {
    console.error('S3 Upload Error:', error);
    throw new Error(`Failed to upload to S3: ${error.message}`);
  }
};

/**
 * Delete file from S3
 */
export const deleteFromS3 = async (key) => {
  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
    };

    const command = new DeleteObjectCommand(params);
    await s3Client.send(command);

    return { success: true, message: 'File deleted from S3' };
  } catch (error) {
    console.error('S3 Delete Error:', error);
    throw new Error(`Failed to delete from S3: ${error.message}`);
  }
};

/**
 * Generate signed URL for S3 object
 */
export const getSignedFileUrl = async (key, expiresIn = 3600) => {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
    });

    return await awsGetSignedUrl(s3Client, command, { expiresIn });
  } catch (error) {
    console.error('Signed URL Generation Error:', error);
    throw new Error(`Failed to generate signed URL: ${error.message}`);
  }
};

/**
 * Generate presigned POST data for direct browser uploads
 */
export const getPresignedPost = async (prefix, maxFileSize = 5242880) => {
  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Fields: {
        key: `${prefix}/${Date.now()}-${Math.random().toString(36).substring(7)}`,
      },
      Conditions: [
        ['content-length-range', 0, maxFileSize],
        ['starts-with', '$Content-Type', 'image/'],
      ],
      Expires: 3600,
    };

    return await createPresignedPost(s3Client, params);
  } catch (error) {
    console.error('Presigned POST Error:', error);
    throw new Error(`Failed to generate presigned POST: ${error.message}`);
  }
};

export default s3Client;