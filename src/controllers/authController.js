import { registerUser, loginUser, logoutUser } from '../services/authService.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    return res.status(201).json(successResponse(user, 'Registration successful', 201));
  } catch (error) {
    if (error.code === 'USER_EXISTS') {
      return res.status(409).json(errorResponse(error.message, 409));
    }

    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);
    return res.status(200).json(successResponse(result, 'Login successful'));
  } catch (error) {
    if (error.code === 'INVALID_CREDENTIALS') {
      return res.status(401).json(errorResponse('Invalid email or password', 401));
    }

    return next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    const result = await logoutUser();
    return res.status(200).json(successResponse(result, 'Logout successful'));
  } catch (error) {
    return next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json(errorResponse('Unauthorized', 401));
    }

    return res.status(200).json(successResponse(req.user, 'User authenticated'));
  } catch (error) {
    return next(error);
  }
};