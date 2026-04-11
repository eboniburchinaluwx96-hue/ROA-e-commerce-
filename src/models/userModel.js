import { v4 as uuidv4 } from 'uuid';
import { query } from './config/database.js';

/**
 * USERS TABLE
 */
const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'buyer',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
`;

/**
 * REFRESH TOKENS TABLE (SESSION SYSTEM)
 */
const createRefreshTokensTableQuery = `
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);
`;

/**
 * INITIALIZE TABLES
 */
export const initializeUserTable = async () => {
  await query(createUsersTableQuery);
  await query(createRefreshTokensTableQuery);
};

/**
 * CREATE USER
 */
export const createUser = async ({
  full_name,
  email,
  password,
  phone_number,
  role = 'buyer',
}) => {
  const id = uuidv4();

  const result = await query(
    `INSERT INTO users (id, full_name, email, password, phone_number, role)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, full_name, email, phone_number, role, created_at, updated_at`,
    [id, full_name, email, password, phone_number, role]
  );

  return result.rows[0];
};

/**
 * FIND USER BY EMAIL (includes password for login)
 */
export const findUserByEmail = async (email) => {
  const result = await query(
    `SELECT id, full_name, email, password, phone_number, role, created_at, updated_at
     FROM users WHERE email = $1`,
    [email]
  );

  return result.rows[0];
};

/**
 * FIND USER BY ID (safe version, no password)
 */
export const findUserById = async (id) => {
  const result = await query(
    `SELECT id, full_name, email, phone_number, role, created_at, updated_at
     FROM users WHERE id = $1`,
    [id]
  );

  return result.rows[0];
};

/**
 * STORE REFRESH TOKEN (SESSION CREATION)
 */
export const storeRefreshToken = async (userId, token) => {
  await query(
    `INSERT INTO refresh_tokens (user_id, token, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '7 days')`,
    [userId, token]
  );
};

/**
 * FIND REFRESH TOKEN (VALIDATION)
 */
export const findRefreshToken = async (userId, token) => {
  const result = await query(
    `SELECT * FROM refresh_tokens
     WHERE user_id = $1 AND token = $2`,
    [userId, token]
  );

  return result.rows[0];
};

/**
 * DELETE REFRESH TOKEN (LOGOUT / ROTATION)
 */
export const deleteRefreshToken = async (userId, token) => {
  await query(
    `DELETE FROM refresh_tokens
     WHERE user_id = $1 AND token = $2`,
    [userId, token]
  );
};