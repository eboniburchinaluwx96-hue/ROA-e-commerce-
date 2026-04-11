import express from 'express';
import {
  register,
  login,
  logout,
  getProfile,
  refresh,
} from '../controllers/authController.js';

import { validateRegister, validateLogin } from '../middlewares/validation.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

/**
 * REGISTER
 */
router.post('/register', validateRegister, register);

/**
 * LOGIN
 */
router.post('/login', validateLogin, login);

/**
 * REFRESH TOKEN (NEW)
 */
router.post('/refresh', refresh);

/**
 * LOGOUT (SESSION-BASED)
 */
router.post('/logout', verifyToken, logout);

/**
 * PROFILE (PROTECTED)
 */
router.get('/profile', verifyToken, getProfile);

export default router;