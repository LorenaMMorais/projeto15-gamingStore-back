import { Router } from "express";
import { postProducts,getProducts } from "../controllers/productController.js";

const router = Router();

router.post('/products', postProducts);
router.get('/products', getProducts);

export default router;