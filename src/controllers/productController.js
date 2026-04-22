import * as productService from '../services/productservice.js';
import { successResponse, errorResponse } from '../utils/response.js';

/**
 * CREATE PRODUCT
 */
export const createProduct = async (req, res, next) => {
  try {
    const product = await productService.createNewProduct(req.body,req.user.id);
    return res.status(201).json(successResponse(product, 'Product created', 201));
  } catch (error) {
    next(error);
  }
};

/**
 * GET PRODUCT BY ID
 */
export const getProduct = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    return res.json(successResponse(product));
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      return res.status(404).json(errorResponse(error.message, 404));
    }
    next(error);
  }
};

/**
 * GET PRODUCTS BY STORE
 */
export const getStoreProducts = async (req, res, next) => {
  try {
    const products = await productService.getProductsByStore(req.params.storeId);
    return res.json(successResponse(products));
  } catch (error) {
    next(error);
  }
};

/**
 * GET PRODUCTS BY CATEGORY
 */
export const getProductsByCategory = async (req, res, next) => {
  try {
    const products = await productService.getProductsByCategoryService(req.params.category);
    return res.json(successResponse(products));
  } catch (error) {
    next(error);
  }
};

/**
 * UPDATE PRODUCT
 */
export const updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateExistingProduct(
      req.params.id,
      req.body,
      req.user.id
    );

    return res.json(successResponse(product, 'Product updated'));
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      return res.status(404).json(errorResponse(error.message, 404));
    }
    next(error);
  }
};

/**
 * DELETE PRODUCT
 */
export const deleteProduct = async (req, res, next) => {
  try {
    const result = await productService.removeProduct(req.params.id);
    return res.json(successResponse(result));
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      return res.status(404).json(errorResponse(error.message, 404));
    }
    next(error);
  }
};

/**
 * ADD IMAGE
 */
export const addImage = async (req, res, next) => {
  try {
    const image = await productService.addProductImage(req.body);
    return res.status(201).json(successResponse(image, 'Image added'));
  } catch (error) {
    next(error);
  }
};

/**
 * SET PRIMARY IMAGE
 */
export const setPrimary = async (req, res, next) => {
  try {
    const image = await productService.makePrimaryImage(
      req.params.productId,
      req.params.imageId
    );

    return res.json(successResponse(image, 'Primary image set'));
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE IMAGE
 */
export const deleteImage = async (req, res, next) => {
  try {
    const result = await productService.removeProductImage(req.params.imageId);
    return res.json(successResponse(result));
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      return res.status(404).json(errorResponse(error.message, 404));
    }
    next(error);
  }
};