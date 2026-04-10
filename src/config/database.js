import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

/**
 * PostgreSQL Connection Pool Configuration for AWS RDS
 * Works with AWS Elastic Beanstalk environment variables
 * Falls back to .env variables if running locally
 */

const getDbConfig = () => {
  const isAWSElasticBeanstalk = process.env.RDS_DB_NAME && process.env.RDS_HOSTNAME;

  if (isAWSElasticBeanstalk) {
    return {
      host: process.env.RDS_HOSTNAME,
      port: parseInt(process.env.RDS_PORT || '5432', 10),
      database: process.env.RDS_DB_NAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: parseInt(process.env.DB_POOL_MAX || '10', 10),
      idleTimeoutMillis: parseInt(process.env.DB_POOL_IDLE_TIMEOUT || '30000', 10),
      connectionTimeoutMillis: parseInt(process.env.DB_POOL_CONNECTION_TIMEOUT || '5000', 10),
      application_name: 'nigerian_ecommerce_backend',
    };
  }

  return {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME || 'roa',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    max: parseInt(process.env.DB_POOL_MAX || '10', 10),
    idleTimeoutMillis: parseInt(process.env.DB_POOL_IDLE_TIMEOUT || '30000', 10),
    connectionTimeoutMillis: parseInt(process.env.DB_POOL_CONNECTION_TIMEOUT || '5000', 10),
    application_name: 'nigerian_ecommerce_backend',
  };
};

// Create connection pool
const pool = new Pool(getDbConfig());

// Handle pool errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(1);
});

/**
 * Query helper function
 */
export const query = (text, params) => {
  const start = Date.now();

  return pool
    .query(text, params)
    .then((res) => {
      const duration = Date.now() - start;
      console.log('Executed query', { text, duration, rows: res.rowCount });
      return res;
    })
    .catch((error) => {
      console.error('Database query error', { text, error });
      throw error;
    });
};

/**
 * Get a client from the pool for transactions
 */
export const getClient = () => {
  return pool.connect();
};

/**
 * Health check for database connection
 */
export const checkDatabaseHealth = async () => {
  try {
    const result = await query('SELECT NOW()');
    return { status: 'healthy', timestamp: result.rows[0] };
  } catch (error) {
    return { status: 'unhealthy', error: error.message };
  }
};

export default pool;