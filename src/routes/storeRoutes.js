import express from 'express';
import {
  createStore,
  getUserStore,
  updateStore,
} from '../controllers/storeController.js';

import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

/**
 * CREATE STORE
 */
router.post('/', authenticateToken, createStore);

/**
 * GET MY STORE
 */
router.get('/my-store', authenticateToken, getUserStore);

/**
 * UPDATE STORE (NAME + LOGO)
 */
router.put('/', authenticateToken, updateStore);

export default router;