import { v4 as uuidv4 } from 'uuid';
import { query } from '../config/database.js';

/**
 * STORES TABLE
 */
const createStoresTableQuery = `
CREATE TABLE IF NOT EXISTS stores (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  logo_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
`;

/**
 * INITIALIZE TABLES
 */
export const initializeStoreTable = async () => {
  await query(createStoresTableQuery);

  await query(`CREATE INDEX IF NOT EXISTS idx_stores_user_id ON stores(user_id);`);
  await query(`CREATE INDEX IF NOT EXISTS idx_stores_slug ON stores(slug);`);
};

/**
 * CREATE STORE
 */
export const createStore = async ({ user_id, name, slug, description }) => {
  const id = uuidv4();

  const result = await query(
    `INSERT INTO stores (id, user_id, name, slug, description)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, user_id, name, slug, description, logo_url, created_at, updated_at`,
    [id, user_id, name, slug, description]
  );

  return result.rows[0];
};

/**
 * UPDATE STORE
 */
export const updateStore = async (userId, updates) => {
  const fields = [];
  const values = [];
  let count = 1;

  Object.entries(updates).forEach(([key, value]) => {
    if (value !== undefined) {
      fields.push(`${key} = $${count}`);
      values.push(value);
      count++;
    }
  });

  if (fields.length === 0) return null;

  values.push(userId);

  const result = await query(
    `UPDATE stores SET ${fields.join(', ')}, updated_at = NOW()
     WHERE user_id = $${count}
     RETURNING id, user_id, name, slug, description, logo_url, created_at, updated_at`,
    values
  );

  return result.rows[0];
};

/**
 * FIND STORE BY USER ID
 */
export const findStoreByUserId = async (userId) => {
  const result = await query(
    `SELECT id, user_id, name, slug, description, logo_url, created_at, updated_at
     FROM stores WHERE user_id = $1`,
    [userId]
  );

  return result.rows[0];
};

/**
 * CHECK SLUG
 */
export const checkSlugExists = async (slug) => {
  const result = await query(`SELECT id FROM stores WHERE slug = $1`, [slug]);
  return result.rows.length > 0;
};