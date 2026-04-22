import {
  createProduct,
  findProductById,
  findProductsByStoreId,
  findProductsByCategory,
  updateProduct,
  deleteProduct,
  createProductImage,
  findProductImages,
  setPrimaryImage,
  deleteProductImage,
} from '../models/productModel.js';

import { findStoreById } from '../models/storeModel.js';

/**
 * VERIFY STORE OWNERSHIP (REUSABLE SECURITY CHECK)
 */
const verifyStoreOwner = (store, userId) => {
  if (!store || store.user_id !== userId) {
    const error = new Error('Unauthorized access to store');
    error.code = 'FORBIDDEN';
    throw error;
  }
};

/**
 * CREATE PRODUCT (SECURE)
 */
export const createNewProduct = async (data, userId) => {
  const store = await findStoreById(data.store_id);

  if (!store) {
    const error = new Error('Store not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  verifyStoreOwner(store, userId);

  return await createProduct(data);
};

/**
 * GET PRODUCT BY ID (WITH IMAGES)
 */
export const getProductById = async (id) => {
  const product = await findProductById(id);

  if (!product) {
    const error = new Error('Product not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  const images = await findProductImages(id);

  return {
    ...product,
    images,
  };
};

/**
 * GET PRODUCTS BY STORE
 */
export const getProductsByStore = async (storeId) => {
  return await findProductsByStoreId(storeId);
};

/**
 * GET PRODUCTS BY CATEGORY
 */
export const getProductsByCategoryService = async (category) => {
  return await findProductsByCategory(category);
};

/**
 * UPDATE PRODUCT (SECURE)
 */
export const updateExistingProduct = async (id, updates, userId) => {
  const product = await findProductById(id);

  if (!product) {
    const error = new Error('Product not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  const store = await findStoreById(product.store_id);
  verifyStoreOwner(store, userId);

  return await updateProduct(id, updates);
};

/**
 * DELETE PRODUCT (SECURE FIXED)
 */
export const removeProduct = async (id, userId) => {
  const product = await findProductById(id);

  if (!product) {
    const error = new Error('Product not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  const store = await findStoreById(product.store_id);
  verifyStoreOwner(store, userId);

  const deleted = await deleteProduct(id);

  if (!deleted) {
    const error = new Error('Delete failed');
    error.code = 'DELETE_FAILED';
    throw error;
  }

  return { message: 'Product deleted successfully' };
};

/**
 * ADD PRODUCT IMAGE (SECURE)
 */
export const addProductImage = async (productId, data, userId) => {
  const product = await findProductById(productId);

  if (!product) {
    const error = new Error('Product not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  const store = await findStoreById(product.store_id);
  verifyStoreOwner(store, userId);

  return await createProductImage({
    product_id: productId,
    image_url: data.image_url,
    is_primary: data.is_primary || false,
  });
};

/**
 * SET PRIMARY IMAGE (SECURE)
 */
export const makePrimaryImage = async (productId, imageId, userId) => {
  const product = await findProductById(productId);

  const store = await findStoreById(product.store_id);
  verifyStoreOwner(store, userId);

  return await setPrimaryImage(productId, imageId);
};

/**
 * DELETE IMAGE (SECURE)
 */
export const removeProductImage = async (imageId, productId, userId) => {
  const product = await findProductById(productId);

  const store = await findStoreById(product.store_id);
  verifyStoreOwner(store, userId);

  const deleted = await deleteProductImage(imageId);

  if (!deleted) {
    const error = new Error('Image not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  return { message: 'Image deleted successfully' };
};