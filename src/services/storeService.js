import {
  createStore,
  findStoreByUserId,
  checkSlugExists,
  updateStore,
} from '../models/storeModel.js';

import { findUserById } from '../models/userModel.js';
import { generateStoreSlug } from '../utils/validators.js';

/**
 * CREATE STORE
 */
export const createNewStore = async (data, userId) => {
  const user = await findUserById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  const existingStore = await findStoreByUserId(userId);
  if (existingStore) {
    const error = new Error('User already has a store');
    error.code = 'STORE_EXISTS';
    throw error;
  }

  let slug = generateStoreSlug(data.name);

  let counter = 1;
  const originalSlug = slug;

  while (await checkSlugExists(slug)) {
    slug = `${originalSlug}-${counter}`;
    counter++;
  }

  return await createStore({
    user_id: userId,
    name: data.name.trim(),
    slug,
    description: data.description?.trim(),
  });
};

/**
 * GET STORE
 */
export const getStoreByUserId = async (userId) => {
  return await findStoreByUserId(userId);
};

/**
 * UPDATE STORE (NAME + LOGO)
 */
export const updateUserStore = async (userId, data) => {
  const store = await findStoreByUserId(userId);

  if (!store) {
    const error = new Error('Store not found');
    error.code = 'NOT_FOUND';
    throw error;
  }

  const updates = {};

  if (data.name) {
    updates.name = data.name.trim();
  }

  if (data.logo_url) {
    updates.logo_url = data.logo_url;
  }

  return await updateStore(userId, updates);
};