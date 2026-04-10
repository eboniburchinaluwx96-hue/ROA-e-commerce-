/**
 * Application Constants
 * Nigeria-specific constants and system configurations
 */

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

// User Roles
export const USER_ROLES = {
  BUYER: 'buyer',
  SELLER: 'seller',
  ADMIN: 'admin',
};

// KYC Verification Status
export const KYC_STATUS = {
  NOT_STARTED: 'not_started',
  PENDING: 'pending',
  VERIFIED: 'verified',
  REJECTED: 'rejected',
  SUSPENDED: 'suspended',
};

// Order Status
export const ORDER_STATUS = {
  PENDING_PAYMENT: 'pending_payment',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
  DISPUTED: 'disputed',
};

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
  REVERSED: 'reversed',
};

// Payment Methods
export const PAYMENT_METHODS = {
  PAYSTACK: 'paystack',
  FLUTTERWAVE: 'flutterwave',
  BANK_TRANSFER: 'bank_transfer',
  COD: 'cash_on_delivery',
  USSD: 'ussd', // Phase 2
  MOBILE_MONEY: 'mobile_money', // Phase 2
};

// Seller Status
export const SELLER_STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  CLOSED: 'closed',
};

// Review Ratings
export const REVIEW_RATINGS = {
  EXCELLENT: 5,
  GOOD: 4,
  AVERAGE: 3,
  POOR: 2,
  TERRIBLE: 1,
};

// Delivery Experience
export const DELIVERY_EXPERIENCE = {
  ON_TIME: 'on_time',
  LATE: 'late',
  VERY_LATE: 'very_late',
  NOT_DELIVERED: 'not_delivered',
};

// Commission rates
export const COMMISSION_RATES = {
  DEFAULT: 0.1, // 10%
  ELECTRONICS: 0.15, // 15%
  FASHION: 0.1, // 10%
  FOOD: 0.15, // 15%
};

// State delivery times (in days)
export const DELIVERY_TIME_BY_REGION = {
  'Lagos': { min: 1, max: 2 },
  'Ogun': { min: 1, max: 2 },
  'Oyo': { min: 2, max: 3 },
  'Osun': { min: 2, max: 3 },
  'Kwara': { min: 2, max: 4 },
  'Kogi': { min: 2, max: 4 },
  'Abuja': { min: 2, max: 3 },
  'Kano': { min: 4, max: 7 },
  'Kaduna': { min: 3, max: 5 },
  'Port Harcourt': { min: 3, max: 5 },
  'Default': { min: 3, max: 7 },
};

// VAT Rate (Nigeria)
export const VAT_RATE = 0.075; // 7.5%

// VAT Exempt Product Categories
export const VAT_EXEMPT_CATEGORIES = ['medicines', 'basic_food_items'];

// Password requirements
export const PASSWORD_REQUIREMENTS = {
  MIN_LENGTH: 8,
  REQUIRE_UPPERCASE: true,
  REQUIRE_LOWERCASE: true,
  REQUIRE_NUMBERS: true,
  REQUIRE_SPECIAL: true,
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
  DEFAULT_PAGE: 1,
};

// File upload limits
export const FILE_LIMITS = {
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_DOCUMENT_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
};

// Dispute reasons
export const DISPUTE_REASONS = {
  NOT_DELIVERED: 'not_delivered',
  DAMAGED: 'damaged',
  NOT_AS_DESCRIBED: 'not_as_described',
  QUALITY_ISSUE: 'quality_issue',
  SCAM: 'scam',
  OTHER: 'other',
};

// Dispute resolution windows (in days)
export const DISPUTE_WINDOW_DAYS = 14;

// Seller verification document types
export const SELLER_DOCUMENT_TYPES = {
  NIN: 'nin', // National ID
  BVN: 'bvn', // Bank Verification Number
  DRIVERS_LICENSE: 'drivers_license',
  INTERNATIONAL_PASSPORT: 'international_passport',
  CAC: 'cac', // Corporate Affairs Commission
};

// Cache expiry times (in seconds)
export const CACHE_EXPIRY = {
  PRODUCT_LIST: 3600, // 1 hour
  PRODUCT_DETAILS: 1800, // 30 minutes
  SELLER_PROFILE: 3600, // 1 hour
  USER_PROFILE: 1800, // 30 minutes
  TOKEN: 900, // 15 minutes
};

// Email templates
export const EMAIL_TEMPLATES = {
  WELCOME: 'welcome',
  ORDER_CONFIRMATION: 'order_confirmation',
  SHIPMENT_NOTIFICATION: 'shipment_notification',
  DELIVERY_NOTIFICATION: 'delivery_notification',
  PAYMENT_RECEIPT: 'payment_receipt',
  REFUND_NOTIFICATION: 'refund_notification',
  DISPUTE_OPENED: 'dispute_opened',
  DISPUTE_RESOLVED: 'dispute_resolved',
};

export default {
  HTTP_STATUS,
  USER_ROLES,
  KYC_STATUS,
  ORDER_STATUS,
  PAYMENT_STATUS,
  PAYMENT_METHODS,
  SELLER_STATUS,
  REVIEW_RATINGS,
  DELIVERY_EXPERIENCE,
  COMMISSION_RATES,
  DELIVERY_TIME_BY_REGION,
  VAT_RATE,
  VAT_EXEMPT_CATEGORIES,
  PASSWORD_REQUIREMENTS,
  PAGINATION,
  FILE_LIMITS,
  DISPUTE_REASONS,
  DISPUTE_WINDOW_DAYS,
  SELLER_DOCUMENT_TYPES,
  CACHE_EXPIRY,
  EMAIL_TEMPLATES,
};
