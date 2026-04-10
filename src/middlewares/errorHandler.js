import logger from '../config/logger.js';

/**
 * Global Error Handler Middleware
 */

export const errorHandler = (err, req, res, next) => {
  logger.error('Unhandled error', {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    ip: req.ip,
  });

  // Database errors
  if (err.code === '23505') {
    return res.status(409).json({
      success: false,
      message: 'Resource already exists',
      error: 'DUPLICATE_ENTRY',
    });
  }

  if (err.code === '23503') {
    return res.status(400).json({
      success: false,
      message: 'Invalid reference',
      error: 'INVALID_REFERENCE',
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
      error: 'INVALID_TOKEN',
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Token expired',
      error: 'TOKEN_EXPIRED',
    });
  }

  // AWS S3 errors
  if (err.code === 'NoSuchBucket' || err.code === 'NoSuchKey') {
    return res.status(404).json({
      success: false,
      message: 'S3 resource not found',
      error: 'S3_NOT_FOUND',
    });
  }

  // Default error response
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

/**
 * Async Error Handler Wrapper
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * 404 Handler Middleware
 */
export const notFoundHandler = (req, res) => {
  logger.warn('404 Not Found', {
    path: req.path,
    method: req.method,
    ip: req.ip,
  });

  return res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path,
  });
};

export default errorHandler;