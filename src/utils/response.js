/**
 * Standardized API Response Formatter
 * Ensures consistent response structure across all endpoints
 */

/**
 * Success Response
 * @param {*} data - Response data
 * @param {string} message - Response message
 * @param {number} statusCode - HTTP status code
 * @returns {object} - Formatted response
 */
export const successResponse = (data, message = 'Success', statusCode = 200) => {
  return {
    success: true,
    statusCode,
    message,
    data,
    timestamp: new Date().toISOString(),
  };
};

/**
 * Error Response
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @param {*} error - Error details (optional)
 * @returns {object} - Formatted error response
 */
export const errorResponse = (message, statusCode = 500, error = null) => {
  return {
    success: false,
    statusCode,
    message,
    ...(error && process.env.NODE_ENV === 'development' && { error }),
    timestamp: new Date().toISOString(),
  };
};

/**
 * Paginated Response
 * @param {array} data - Array of items
 * @param {number} page - Current page
 * @param {number} limit - Items per page
 * @param {number} total - Total items count
 * @param {string} message - Response message
 * @returns {object} - Formatted paginated response
 */
export const paginatedResponse = (
  data,
  page,
  limit,
  total,
  message = 'Success'
) => {
  const totalPages = Math.ceil(total / limit);
  const hasNext = page < totalPages;
  const hasPrev = page > 1;

  return {
    success: true,
    message,
    data,
    pagination: {
      currentPage: page,
      limit,
      totalPages,
      totalItems: total,
      hasNext,
      hasPrev,
    },
    timestamp: new Date().toISOString(),
  };
};

export default {
  successResponse,
  errorResponse,
  paginatedResponse,
};
