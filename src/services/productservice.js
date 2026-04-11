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
} from './models/productModel.js';
import { findStoreById } from './models/storeModel.js';

/**
 * CREATE PRODUCT
 */
export const createNewProduct = async (data, userId) => {
  const store = await findStoreById(data.store_id);

  if (!store) {
    const error = new Error('Store not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  if (store.user_id !== userId) {
    const error = new Error('Unauthorized');
    error.code = 'FORBIDDEN';
    throw error;
  }

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
    images: images
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
 * UPDATE PRODUCT
 */
export const updateExistingProduct = async (id, updates, userId) => {
  const product = await findProductById(id);

  if (!product) {
    const error = new Error('Product not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  const store = await findStoreById(product.store_id);

  if (store.user_id !== userId) {
    const error = new Error('Unauthorized');
    error.code = 'FORBIDDEN';
    throw error;
  }

  return await updateProduct(id, updates);
};

/**
 * DELETE PRODUCT
 */
export const removeProduct = async (id) => {
  const deleted = await deleteProduct(id);

  if (!deleted) {
    const error = new Error('Product not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  return { message: 'Product deleted successfully' };
};

/**
 * ADD PRODUCT IMAGE
 */
export const addProductImage = async (data) => {
  return await createProductImage(data);
};

/**
 * SET PRIMARY IMAGE
 */
export const makePrimaryImage = async (productId, imageId) => {
  return await setPrimaryImage(productId, imageId);
};

/**
 * DELETE IMAGE
 */
export const removeProductImage = async (imageId) => {
  const deleted = await deleteProductImage(imageId);

  if (!deleted) {
    const error = new Error('Image not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  return { message: 'Image deleted successfully' };
};