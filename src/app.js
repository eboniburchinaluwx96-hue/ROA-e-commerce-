import express from 'express';
import cors from 'cors';
import config from './config/env.js';
import authRoutes from './routes/authRoutes.js';
import storeRoutes from './routes/storeRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import logger from './config/logger.js';
import { checkDatabaseHealth } from './config/database.js';
import { initializeUserTable } from './models/userModel.js';
import { initializeStoreTable } from './models/storeModel.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'ROA ecommerce backend is running',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/stores', storeRoutes);
app.use(errorHandler);

const startServer = async () => {
  try {
    await initializeUserTable();
    await initializeStoreTable();
    const health = await checkDatabaseHealth();
    logger.info('Database health check passed', health);
  } catch (error) {
    logger.error('Startup validation failed', { error: error.message });
    process.exit(1);
  }

  app.listen(config.port, () => {
    logger.info(`Server started on port ${config.port}`);
  });
};

startServer();

export default app;
