import express from 'express';
import { register, login, logout, getProfile } from '../controllers/authController.js';
import { validateAuth } from '../middlewares/validation.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

/**
 * POST /auth/register
 * Register a new user
 */
router.post('/register', validateAuth, register);

/**
 * POST /auth/login
 * Login user
 */
router.post('/login', validateAuth, login);

/**
 * POST /auth/logout
 * Logout user
 */
router.post('/logout', verifyToken, logout);

/**
 * GET /auth/profile
 * Get user profile
 */
router.get('/profile', verifyToken, getProfile);

export default router;
