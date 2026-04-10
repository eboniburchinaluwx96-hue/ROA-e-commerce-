import bcrypt from 'bcryptjs';
import {
  createUser,
  findUserByEmail,
  storeRefreshToken,
  findRefreshToken,
  deleteRefreshToken,
} from '../models/userModel.js';

import { createTokenPair, verifyRefreshToken } from '../utils/jwt.js';
import logger from '../config/logger.js';

/**
 * REGISTER USER
 */
export const registerUser = async ({
  full_name,
  email,
  password,
  phone_number,
}) => {
  const normalizedEmail = email.toLowerCase().trim();

  const existingUser = await findUserByEmail(normalizedEmail);

  if (existingUser) {
    const error = new Error('Email already registered');
    error.code = 'USER_EXISTS';
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await createUser({
    full_name: full_name.trim(),
    email: normalizedEmail,
    password: hashedPassword,
    phone_number: phone_number?.trim(),
    role: 'buyer',
  });

  const tokenPair = createTokenPair({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  await storeRefreshToken(user.id, tokenPair.refreshToken);

  return {
    user: user,
    tokens: tokenPair,
  };
};

/**
 * LOGIN USER
 */
export const loginUser = async ({ email, password }) => {
  const normalizedEmail = email.toLowerCase().trim();

  const user = await findUserByEmail(normalizedEmail);

  if (!user) {
    const error = new Error('Invalid email or password');
    error.code = 'INVALID_CREDENTIALS';
    throw error;
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    const error = new Error('Invalid email or password');
    error.code = 'INVALID_CREDENTIALS';
    throw error;
  }

  const tokenPair = createTokenPair({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  await storeRefreshToken(user.id, tokenPair.refreshToken);

  return {
    user: {
      id: user.id,
      full_name: user.full_name,
      email: user.email,
      phone_number: user.phone_number,
      role: user.role,
      created_at: user.created_at,
    },
    tokens: tokenPair,
  };
};

/**
 * REFRESH TOKEN (ROTATION SYSTEM - SAFE)
 */
export const refreshUserToken = async (refreshToken) => {
  if (!refreshToken) {
    const error = new Error('Refresh token missing');
    error.code = 'NO_REFRESH_TOKEN';
    throw error;
  }

  let decoded;

  try {
    decoded = verifyRefreshToken(refreshToken);
  } catch (err) {
    const error = new Error('Invalid refresh token');
    error.code = 'INVALID_REFRESH_TOKEN';
    throw error;
  }

  const storedToken = await findRefreshToken(decoded.id, refreshToken);

  if (!storedToken) {
    const error = new Error('Invalid refresh session');
    error.code = 'INVALID_SESSION';
    throw error;
  }

  // generate new tokens
  const newTokenPair = createTokenPair({
    id: decoded.id,
    email: decoded.email,
    role: decoded.role,
  });

  // SAFE ROTATION (no session loss risk)
  await deleteRefreshToken(decoded.id, refreshToken);
  await storeRefreshToken(decoded.id, newTokenPair.refreshToken);

  return newTokenPair;
};

/**
 * LOGOUT USER (REAL LOGOUT)
 */
export const logoutUser = async (userId, refreshToken) => {
  if (refreshToken) {
    await deleteRefreshToken(userId, refreshToken);
  }

  logger.info('User logged out', { userId });

  return { message: 'Logged out successfully' };
};