/**
 * Nigerian-specific validators and formatters
 */

/**
 * Validate Nigerian phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid Nigerian number
 */
export const isValidNigerianPhone = (phone) => {
  // Matches: +234, 0234, or 234 followed by 10 digits
  const nigerianPhoneRegex = /^(\+234|0234|234)\d{10}$/;
  return nigerianPhoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Convert Nigerian phone to international format
 * @param {string} phone - Phone number
 * @returns {string} - Phone in +234... format
 */
export const normalizeNigerianPhone = (phone) => {
  const cleaned = phone.replace(/\s/g, '');

  if (cleaned.startsWith('+234')) return cleaned;
  if (cleaned.startsWith('234')) return `+${cleaned}`;
  if (cleaned.startsWith('0')) return `+234${cleaned.substring(1)}`;

  return null;
};

/**
 * Validate Nigerian email format
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate BVN (Bank Verification Number)
 * BVN is 11 digits
 * @param {string} bvn - BVN to validate
 * @returns {boolean}
 */
export const isValidBVN = (bvn) => {
  if (!bvn) return false;
  const cleaned = bvn.replace(/\s/g, '');
  return /^\d{11}$/.test(cleaned);
};

/**
 * Validate CAC number (Corporate Affairs Commission)
 * CAC registrations are typically 7-10 characters
 * @param {string} cacNumber - CAC number
 * @returns {boolean}
 */
export const isValidCACNumber = (cacNumber) => {
  if (!cacNumber) return false;
  const cleaned = cacNumber.replace(/\s/g, '').toUpperCase();
  return /^[A-Z0-9]{7,10}$/.test(cleaned);
};

/**
 * Validate Bank Account Number
 * Nigerian accounts are either 10 or 11 digits
 * @param {string} accountNumber - Account number
 * @returns {boolean}
 */
export const isValidBankAccount = (accountNumber) => {
  if (!accountNumber) return false;
  const cleaned = accountNumber.replace(/\s/g, '');
  return /^\d{10,11}$/.test(cleaned);
};

/**
 * Nigerian states list
 */
export const NIGERIAN_STATES = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'Federal Capital Territory',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
];

/**
 * Product categories common in Nigeria
 */
export const PRODUCT_CATEGORIES = [
  'Electronics',
  'Fashion & Apparel',
  'Home & Living',
  'Beauty & Personal Care',
  'Food & Beverages',
  'Books & Media',
  'Sports & Outdoors',
  'Toys & Games',
  'Automotive',
  'Health & Wellness',
  'Services',
  'Other',
];

/**
 * Generate store slug from store name
 * @param {string} storeName - Store name
 * @returns {string} - URL-safe slug
 */
export const generateStoreSlug = (storeName) => {
  return storeName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .slice(0, 50); // Limit length
};

/**
 * Format currency to Nigerian Naira
 * @param {number} amount - Amount in Naira
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * Calculate shipping cost based on state and weight
 * @param {string} state - Delivery state
 * @param {number} weight - Package weight in kg
 * @returns {number} - Estimated shipping cost
 */
export const calculateShippingCost = (state, weight = 1) => {
  // Simplified shipping rates for Nigeria
  const baseRates = {
    'Lagos': 500,
    'Ogun': 600,
    'Oyo': 700,
    'Osun': 800,
    'Ekiti': 900,
    'Ondo': 1000,
    // Add more states...
  };

  const baseRate = baseRates[state] || 1500; // Default for other states
  const weightCost = (weight - 1) * 100; // Add 100 per additional kg

  return baseRate + weightCost;
};

export default {
  isValidNigerianPhone,
  normalizeNigerianPhone,
  isValidEmail,
  isValidBVN,
  isValidCACNumber,
  isValidBankAccount,
  NIGERIAN_STATES,
  PRODUCT_CATEGORIES,
  generateStoreSlug,
  formatCurrency,
  calculateShippingCost,
};
