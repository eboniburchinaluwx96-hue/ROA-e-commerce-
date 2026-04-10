import jwt from 'jsonwebtoken';
import logger from '../config/logger.js';
import config from '../config/env.js';

/**
 * Authentication Middleware
 * Verifies JWT token from Authorization header
 * Attaches user data to request object
 */

export const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      logger.warn('No token provided', { ip: req.ip, path: req.path });
      return res.status(401).json({
        success: false,
        message: 'Access token required',
      });
    }

    jwt.verify(token, config.jwt.secret, (err, user) => {
      if (err) {
        logger.warn('Invalid token', { error: err.message, ip: req.ip });
        return res.status(403).json({
          success: false,
          message: 'Invalid or expired token',
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    logger.error('Authentication error', { error: error.message });
    return res.status(500).json({
      success: false,
      message: 'Authentication failed',
    });
  }
};

/**
 * Optional Authentication Middleware
 * Verifies token if provided, but doesn't require it
 * Useful for public endpoints that have extra features when authenticated
 */
export const optionalAuth = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return next(); // No token, proceed without user
    }

    jwt.verify(token, config.jwt.secret, (err, user) => {
      if (!err) {
        req.user = user;
      }
      next();
    });
  } catch (error) {
    logger.error('Optional auth error', { error: error.message });
    next(); // Proceed without user even if error
  }
};

/**
 * Role-based Authorization Middleware
 * @param {...string} allowedRoles - Roles allowed to access the endpoint
 * @returns {Function} Express middleware
 */
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      logger.warn('No user in request for authorization check');
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      logger.warn('Unauthorized role attempt', {
        userId: req.user.id,
        userRole: req.user.role,
        allowedRoles,
        path: req.path,
      });
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to access this resource',
      });
    }

    next();
  };
};

export default authenticateToken;
