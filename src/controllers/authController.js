import asyncHandler from 'express-async-handler';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserToken,
} from '../services/authService.js';

import { successResponse, errorResponse } from '../utils/response.js';

/**
 * REGISTER
 */
export const register = asyncHandler(async (req, res, next) => {
  const result = await registerUser(req.body);

  return res
    .status(201)
    .json(successResponse(result, 'Registration successful', 201));
});

/**
 * LOGIN
 */
export const login = asyncHandler(async (req, res, next) => {
  const result = await loginUser(req.body);

  return res
    .status(200)
    .json(successResponse(result, 'Login successful'));
});

/**
 * REFRESH TOKEN (NEW)
 */
export const refresh = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.body;

  const result = await refreshUserToken(refreshToken);

  return res
    .status(200)
    .json(successResponse(result, 'Token refreshed successfully'));
});

/**
 * LOGOUT (FIXED FOR REAL SESSION SYSTEM)
 */
export const logout = asyncHandler(async (req, res, next) => {
  const userId = req.user?.id;
  const { refreshToken } = req.body;

  const result = await logoutUser(userId, refreshToken);

  return res
    .status(200)
    .json(successResponse(result, 'Logout successful'));
});

/**
 * PROFILE
 */
export const getProfile = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .json(errorResponse('Unauthorized', 401));
  }

  return res
    .status(200)
    .json(successResponse(req.user, 'User authenticated'));
});