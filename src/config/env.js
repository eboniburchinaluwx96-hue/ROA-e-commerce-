import dotenv from 'dotenv';

dotenv.config();

/**
 * Central environment configuration
 * Merges all environment variables with defaults
 */

const config = {
  // Server
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  apiUrl: process.env.API_URL || 'http://localhost:5000',
  apiUrlProd: process.env.API_URL_PROD || 'https://your-domain.com',

  // Database
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    name: process.env.DB_NAME || 'roa',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    ssl: process.env.DB_SSL === 'true',
    poolMin: parseInt(process.env.DB_POOL_MIN || '2', 10),
    poolMax: parseInt(process.env.DB_POOL_MAX || '10', 10),
  },

  // AWS Configuration
  aws: {
    region: process.env.AWS_REGION || 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    s3: {
      bucket: process.env.AWS_S3_BUCKET,
      bucketRegion: process.env.AWS_S3_BUCKET_REGION || 'us-east-1',
      imageFolder: process.env.AWS_S3_IMAGE_FOLDER || 'products',
      avatarFolder: process.env.AWS_S3_AVATAR_FOLDER || 'avatars',
    },
  },

  // JWT
  jwt: {
    secret: process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_in_production',
    expire: process.env.JWT_EXPIRE || '7d',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'your_super_secret_refresh_token_key',
    refreshExpire: process.env.JWT_REFRESH_EXPIRE || '30d',
  },

  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    filePath: process.env.LOG_FILE_PATH || './logs',
  },

  // CORS
  cors: {
    origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },

  // Email (Optional)
  email: {
    service: process.env.MAIL_SERVICE || 'gmail',
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
  },

  // SMS/Notifications (Optional)
  sms: {
    termiiApiKey: process.env.TERMII_API_KEY,
    smsFrom: process.env.SMS_FROM || 'YourBrandName',
  },

  // Payment Gateways (Optional - Phase 2)
  payments: {
    paystack: {
      secretKey: process.env.PAYSTACK_SECRET_KEY,
    },
    flutterwave: {
      secretKey: process.env.FLUTTERWAVE_SECRET_KEY,
    },
  },
};

/**
 * Validate critical configuration
 */
export const validateConfig = () => {
  const requiredEnvVars = [
    'JWT_SECRET',
    'JWT_REFRESH_SECRET',
    'AWS_REGION',
    'AWS_S3_BUCKET',
  ];

  const missing = requiredEnvVars.filter((env) => !process.env[env]);

  if (missing.length > 0) {
    console.warn(
      `⚠️  Missing environment variables: ${missing.join(', ')}. ` +
      'Some features may not work correctly.'
    );
  }

  if (config.nodeEnv === 'production') {
    if (!process.env.AWS_ACCESS_KEY_ID && !process.env.RDS_HOSTNAME) {
      console.warn(
        '⚠️  Production mode detected but AWS credentials not properly configured. ' +
        'Ensure IAM roles are set up on Elastic Beanstalk.'
      );
    }
  }
};

export default config;