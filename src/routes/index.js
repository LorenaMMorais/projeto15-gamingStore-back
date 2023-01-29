import express from 'express';
import categoriesRouter from './categoriesRouter.js';
import productsRouter from './productsRouter.js';

const router = express.Router();

router.use(productsRouter);
router.use(categoriesRouter);

export default router;