import { uploadToS3, deleteFromS3 } from '../config/aws.js';
import logger from '../config/logger.js';

/**
 * File upload handler for S3
 * Handles image compression and upload
 */

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

/**
 * Validate image file
 * @param {object} file - Express file object
 * @returns {object} - { valid: boolean, error?: string }
 */
export const validateImageFile = (file) => {
  if (!file) {
    return { valid: false, error: 'No file provided' };
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
    return {
      valid: false,
      error: 'Invalid file type. Allowed: JPEG, PNG, WebP, GIF',
    };
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit`,
    };
  }

  return { valid: true };
};

/**
 * Upload product image to S3
 * @param {Buffer} fileBuffer - File buffer from multer
 * @param {string} fileName - Original file name
 * @param {string} sellerId - Seller ID for folder organization
 * @returns {Promise<object>} - { success: boolean, url?: string, error?: string }
 */
export const uploadProductImage = async (fileBuffer, fileName, sellerId, contentType = 'image/jpeg') => {
  try {
    const timestamp = Date.now();
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `${process.env.AWS_S3_IMAGE_FOLDER || 'products'}/${sellerId}/${timestamp}-${cleanFileName}`;

    const result = await uploadToS3({
      Key: key,
      Body: fileBuffer,
      ContentType: contentType,
    });

    logger.info('Product image uploaded', {
      key: result.key,
      sellerId,
      url: result.url,
    });

    return {
      success: true,
      url: result.url,
      key: result.key,
    };
  } catch (error) {
    logger.error('Product image upload failed', {
      error: error.message,
      sellerId,
      fileName,
    });

    return {
      success: false,
      error: error.message,
    };
  }
};

/**
 * Upload avatar/profile image to S3
 * @param {Buffer} fileBuffer - File buffer from multer
 * @param {string} fileName - Original file name
 * @param {string} userId - User ID for folder organization
 * @returns {Promise<object>} - { success: boolean, url?: string, error?: string }
 */
export const uploadAvatar = async (fileBuffer, fileName, userId, contentType = 'image/jpeg') => {
  try {
    const timestamp = Date.now();
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `${process.env.AWS_S3_AVATAR_FOLDER || 'avatars'}/${userId}/${timestamp}-${cleanFileName}`;

    const result = await uploadToS3({
      Key: key,
      Body: fileBuffer,
      ContentType: contentType,
    });

    logger.info('Avatar uploaded', {
      key: result.key,
      userId,
      url: result.url,
    });

    return {
      success: true,
      url: result.url,
      key: result.key,
    };
  } catch (error) {
    logger.error('Avatar upload failed', {
      error: error.message,
      userId,
      fileName,
    });

    return {
      success: false,
      error: error.message,
    };
  }
};

/**
 * Delete file from S3
 * @param {string} fileKey - S3 file key
 * @returns {Promise<object>} - { success: boolean, error?: string }
 */
export const deleteFile = async (fileKey) => {
  try {
    const result = await deleteFromS3(fileKey);
    logger.info('File deleted from S3', { key: fileKey });
    return { success: true, ...result };
  } catch (error) {
    logger.error('File deletion failed', {
      error: error.message,
      key: fileKey,
    });

    return {
      success: false,
      error: error.message,
    };
  }
};

export default {
  validateImageFile,
  uploadProductImage,
  uploadAvatar,
  deleteFile,
};
