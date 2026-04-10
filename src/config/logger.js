import winston from 'winston';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logsDir = process.env.LOG_FILE_PATH || path.join(__dirname, '../../logs');

// Create logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

/**
 * Winston Logger Configuration
 */

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ level, message, timestamp, stack, ...meta }) => {
      const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : '';
      const stackStr = stack ? `\n${stack}` : '';
      return `[${timestamp}] ${level.toUpperCase()}: ${message} ${metaStr}${stackStr}`;
    })
  ),
  defaultMeta: { service: 'nigerian-ecommerce-api' },
  transports: [
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error',
      maxsize: 10485760,
      maxFiles: 5,
    }),

    new winston.transports.File({
      filename: path.join(logsDir, 'combined.log'),
      maxsize: 10485760,
      maxFiles: 10,
    }),

    ...(process.env.NODE_ENV !== 'production'
      ? [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.colorize(),
              winston.format.printf(
                ({ level, message, timestamp }) =>
                  `[${timestamp}] ${level}: ${message}`
              )
            ),
          }),
        ]
      : []),
  ],
});

export default logger;