import { v4 as uuidv4 } from 'uuid';
import { query } from './config/database.js';

/**
 * PRODUCTS TABLE
 */
const createProductsTableQuery = `
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY,
  store_id UUID NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'NGN',
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
`;

/**
 * PRODUCT IMAGES TABLE
 */
const createProductImagesTableQuery = `
CREATE TABLE IF NOT EXISTS product_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
`;

/**
 * INITIALIZE TABLES
 */
export const initializeProductTables = async () => {
  // Enable UUID generation
  await query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);

  await query(createProductsTableQuery);
  await query(createProductImagesTableQuery);

  // Indexes for performance
  await query(`CREATE INDEX IF NOT EXISTS idx_products_store_id ON products(store_id);`);
  await query(`CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);`);
  await query(`CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON product_images(product_id);`);
};

/**
 * CREATE PRODUCT
 */
export const createProduct = async ({
  store_id,
  name,
  description,
  price,
  currency = 'NGN',
  category,
}) => {
  const id = uuidv4();

  const result = await query(
    `INSERT INTO products (id, store_id, name, description, price, currency, category)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, store_id, name, description, price, currency, category, created_at, updated_at`,
    [id, store_id, name, description, price, currency, category]
  );

  return result.rows[0];
};

/**
 * FIND PRODUCT BY ID
 */
export const findProductById = async (id) => {
  const result = await query(
    `SELECT id, store_id, name, description, price, currency, category, created_at, updated_at
     FROM products WHERE id = $1`,
    [id]
  );

  return result.rows[0];
};

/**
 * FIND PRODUCTS BY STORE ID
 */
export const findProductsByStoreId = async (storeId) => {
  const result = await query(
    `SELECT id, store_id, name, description, price, currency, category, created_at, updated_at
     FROM products WHERE store_id = $1 ORDER BY created_at DESC`,
    [storeId]
  );

  return result.rows;
};

/**
 * FIND PRODUCTS BY CATEGORY
 */
export const findProductsByCategory = async (category) => {
  const result = await query(
    `SELECT id, store_id, name, description, price, currency, category, created_at, updated_at
     FROM products WHERE category = $1 ORDER BY created_at DESC`,
    [category]
  );

  return result.rows;
};

/**
 * UPDATE PRODUCT (SAFE WHITELIST)
 */
export const updateProduct = async (id, updates) => {
  const allowedFields = ['name', 'description', 'price', 'currency', 'category'];

  const fields = [];
  const values = [];
  let paramCount = 1;

  Object.keys(updates).forEach((key) => {
    if (allowedFields.includes(key) && updates[key] !== undefined) {
      fields.push(`${key} = $${paramCount}`);
      values.push(updates[key]);
      paramCount++;
    }
  });

  if (fields.length === 0) return null;

  values.push(id);

  const result = await query(
    `UPDATE products SET ${fields.join(', ')}, updated_at = NOW()
     WHERE id = $${paramCount}
     RETURNING id, store_id, name, description, price, currency, category, created_at, updated_at`,
    values
  );

  return result.rows[0];
};

/**
 * DELETE PRODUCT (SAFE)
 */
export const deleteProduct = async (id) => {
  const result = await query(
    'DELETE FROM products WHERE id = $1 RETURNING id',
    [id]
  );

  return result.rowCount > 0;
};

/**
 * CREATE PRODUCT IMAGE
 */
export const createProductImage = async ({
  product_id,
  image_url,
  is_primary = false,
}) => {
  if (is_primary) {
    await query(
      'UPDATE product_images SET is_primary = false WHERE product_id = $1',
      [product_id]
    );
  }

  const result = await query(
    `INSERT INTO product_images (product_id, image_url, is_primary)
     VALUES ($1, $2, $3)
     RETURNING id, product_id, image_url, is_primary, created_at`,
    [product_id, image_url, is_primary]
  );

  return result.rows[0];
};

/**
 * FIND PRODUCT IMAGES
 */
export const findProductImages = async (productId) => {
  const result = await query(
    `SELECT id, product_id, image_url, is_primary, created_at
     FROM product_images WHERE product_id = $1
     ORDER BY is_primary DESC, created_at ASC`,
    [productId]
  );

  return result.rows;
};

/**
 * GET PRIMARY IMAGE
 */
export const getPrimaryProductImage = async (productId) => {
  const result = await query(
    `SELECT id, product_id, image_url, is_primary, created_at
     FROM product_images
     WHERE product_id = $1 AND is_primary = true
     LIMIT 1`,
    [productId]
  );

  return result.rows[0];
};

/**
 * DELETE PRODUCT IMAGE
 */
export const deleteProductImage = async (id) => {
  const result = await query(
    'DELETE FROM product_images WHERE id = $1 RETURNING id',
    [id]
  );

  return result.rowCount > 0;
};

/**
 * SET PRIMARY IMAGE
 */
export const setPrimaryImage = async (productId, imageId) => {
  await query(
    'UPDATE product_images SET is_primary = false WHERE product_id = $1',
    [productId]
  );

  const result = await query(
    `UPDATE product_images SET is_primary = true
     WHERE id = $1 AND product_id = $2
     RETURNING id, product_id, image_url, is_primary, created_at`,
    [imageId, productId]
  );

  return result.rows[0];
};