import {
  createNewStore,
  getStoreByUserId,
  updateUserStore,
} from '../services/storeService.js';

import { successResponse, errorResponse } from '../utils/response.js';

/**
 * CREATE STORE
 */
export const createStore = async (req, res, next) => {
  try {
    const store = await createNewStore(req.body, req.user.id);
    return res.status(201).json(successResponse(store, 'Store created'));
  } catch (error) {
    if (error.code === 'STORE_EXISTS') {
      return res.status(409).json(errorResponse(error.message, 409));
    }
    return next(error);
  }
};

/**
 * GET MY STORE
 */
export const getUserStore = async (req, res, next) => {
  try {
    const store = await getStoreByUserId(req.user.id);
    return res.status(200).json(successResponse(store));
  } catch (error) {
    return next(error);
  }
};

/**
 * UPDATE STORE
 */
export const updateStore = async (req, res, next) => {
  try {
    const store = await updateUserStore(req.user.id, req.body);
    return res.status(200).json(successResponse(store, 'Store updated'));
  } catch (error) {
    return next(error);
  }
};