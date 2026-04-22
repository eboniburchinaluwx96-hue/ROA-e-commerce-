import jwt from 'jsonwebtoken';
import logger from '../config/logger.js';
import config from '../config/env.js';

/**
 * Authentication Middleware
 */
export const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    const token =
      authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null;

    if (!token) {
      logger.warn('No token provided', { ip: req.ip, path: req.path });

      return res.status(401).json({
        success: false,
        message: 'Access token required',
      });
    }

    jwt.verify(token, config.jwt.secret, (err, decoded) => {
      if (err) {
        logger.warn('Invalid token', { message: err.message, ip: req.ip });

        return res.status(403).json({
          success: false,
          message: 'Invalid or expired token',
        });
      }

      // 🔥 SAFE PAYLOAD ONLY
      req.user = {
        id: decoded.id,
        role: decoded.role,
        email: decoded.email,
      };

      return next();
    });
  } catch (error) {
    logger.error('Authentication error', { message: error.message });

    return res.status(500).json({
      success: false,
      message: 'Authentication failed',
    });
  }
};

/**
 * Optional Authentication
 */
export const optionalAuth = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    const token =
      authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null;

    if (!token) return next();

    jwt.verify(token, config.jwt.secret, (err, decoded) => {
      if (!err) {
        req.user = {
          id: decoded.id,
          role: decoded.role,
          email: decoded.email,
        };
      }
      return next();
    });
  } catch (error) {
    logger.error('Optional auth error', { message: error.message });
    return next();
  }
};

/**
 * Role-based Authorization
 */
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      logger.warn('No user in request');

      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      logger.warn('Unauthorized role attempt', {
        userId: req.user.id,
        role: req.user.role,
        allowedRoles,
      });

      return res.status(403).json({
        success: false,
        message: 'Forbidden',
      });
    }

    return next();
  };
};

export const verifyToken = authenticateToken;

export default authenticateToken;