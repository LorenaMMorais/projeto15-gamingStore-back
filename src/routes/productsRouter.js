import { Router } from "express";
import { products } from "../controllers/productController.js";

const router = Router();

router.get('/products', products);

export default router;