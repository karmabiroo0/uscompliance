import { Router } from 'express';
import healthCheck from './health-check.js';
import contactRouter from './contact.js';
import integratedAiRouter from './integrated-ai.js';
import stripeRouter from './stripe.js';
import marketNewsRouter from './market-news.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/contact', contactRouter);
    router.use('/integrated-ai', integratedAiRouter);
    router.use('/stripe', stripeRouter);
    router.use('/market-news', marketNewsRouter);

    return router;
};