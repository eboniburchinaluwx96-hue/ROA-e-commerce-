import { v4 as uuidv4 } from 'uuid';
import { query } from '../config/database.js';

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

export const initializeUserTable = async () => {
  await query(createUsersTableQuery);
};

export const createUser = async ({ full_name, email, password, phone_number, role = 'buyer' }) => {
  const id = uuidv4();
  const result = await query(
    `INSERT INTO users (id, full_name, email, password, phone_number, role)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, full_name, email, phone_number, role, created_at, updated_at`,
    [id, full_name, email, password, phone_number, role]
  );

  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const result = await query(
    'SELECT id, full_name, email, password, phone_number, role, created_at, updated_at FROM users WHERE email = $1',
    [email]
  );

  return result.rows[0];
};

export const findUserById = async (id) => {
  const result = await query(
    'SELECT id, full_name, email, phone_number, role, created_at, updated_at FROM users WHERE id = $1',
    [id]
  );

  return result.rows[0];
};