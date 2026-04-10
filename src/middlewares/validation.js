import { body, validationResult } from 'express-validator';
import logger from '../config/logger.js';

/**
 * Validation Error Handler Middleware
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logger.warn('Validation errors', {
      message: 'Validation failed',
      errors: errors.array(),
      path: req.path,
      method: req.method,
    });

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }

  return next();
};

/**
 * Validation Rules for Auth
 */
export const authValidation = {
  register: [
    body('email')
      .isEmail()
      .withMessage('Valid email is required')
      .normalizeEmail()
      .toLowerCase(),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters'),
    body('full_name')
      .trim()
      .notEmpty()
      .withMessage('Full name is required'),
    body('phone_number')
      .matches(/^\+234\d{10}$/)
      .withMessage('Invalid Nigerian phone number format (+234...)'),
  ],

  login: [
    body('email')
      .isEmail()
      .withMessage('Valid email is required')
      .normalizeEmail()
      .toLowerCase(),
    body('password')
      .notEmpty()
      .withMessage('Password is required'),
  ],
};

/**
 * Validation Rules for Products
 */
export const productValidation = {
  create: [
    body('product_name')
      .trim()
      .notEmpty()
      .withMessage('Product name is required'),
    body('description')
      .trim()
      .notEmpty()
      .withMessage('Description is required'),
    body('price_ngn')
      .isFloat({ min: 0.01 })
      .withMessage('Price must be greater than 0'),
    body('stock_quantity')
      .isInt({ min: 0 })
      .withMessage('Stock must be a positive number'),
  ],

  update: [
    body('product_name')
      .optional()
      .trim()
      .notEmpty()
      .withMessage('Product name cannot be empty'),
    body('description')
      .optional()
      .trim()
      .notEmpty()
      .withMessage('Description cannot be empty'),
    body('price_ngn')
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage('Price must be greater than 0'),
    body('stock_quantity')
      .optional()
      .isInt({ min: 0 })
      .withMessage('Stock must be a positive number'),
  ],
};

/**
 * Validation Rules for Orders
 */
export const orderValidation = {
  create: [
    body('items')
      .isArray({ min: 1 })
      .withMessage('Order must contain at least 1 item'),
    body('items.*.product_id')
      .notEmpty()
      .withMessage('Product ID is required'),
    body('items.*.quantity')
      .isInt({ min: 1 })
      .withMessage('Quantity must be at least 1'),
    body('delivery_address')
      .trim()
      .notEmpty()
      .withMessage('Delivery address is required'),
    body('delivery_phone')
      .matches(/^\+234\d{10}$/)
      .withMessage('Invalid Nigerian phone number'),
  ],
};

export default handleValidationErrors;