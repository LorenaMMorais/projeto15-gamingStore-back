import express from 'express';
import productsRouter from './productsRouter';

const router = express.Router();

router.use(productsRouter);

export default router;