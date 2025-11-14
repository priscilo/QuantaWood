import express from 'express';
import { logger } from '@middleware/logger.js';
import apiRoutes from '@routes/api.js';

export function createServer() {
    const app = express();
    app.use(logger);
    app.use('/api', apiRoutes);
    return app;
}