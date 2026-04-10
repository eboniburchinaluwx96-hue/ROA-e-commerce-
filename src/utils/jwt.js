import jwt from 'jsonwebtoken';
import config from '../config/env.js';
import logger from '../config/logger.js';

/**
 * Generate JWT Access Token
 */
export const generateAccessToken = (payload) => {
  try {
    return jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expire,
      algorithm: 'HS256',
    });
  } catch (error) {
    logger.error('Error generating access token', {
      message: error.message,
      stack: error.stack,
    });
    throw error;
  }
};

/**
 * Generate JWT Refresh Token
 */
export const generateRefreshToken = (payload) => {
  try {
    return jwt.sign(payload, config.jwt.refreshSecret, {
      expiresIn: config.jwt.refreshExpire,
      algorithm: 'HS256',
    });
  } catch (error) {
    logger.error('Error generating refresh token', {
      message: error.message,
      stack: error.stack,
    });
    throw error;
  }
};

/**
 * Verify Access Token
 */
export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.secret);
  } catch (error) {
    logger.warn('Invalid access token', {
      message: error.message,
    });
    throw error;
  }
};

/**
 * Verify Refresh Token
 */
export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.refreshSecret);
  } catch (error) {
    logger.warn('Invalid refresh token', {
      message: error.message,
    });
    throw error;
  }
};

/**
 * Create token pair
 */
export const createTokenPair = (payload) => {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
};

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  createTokenPair,
};