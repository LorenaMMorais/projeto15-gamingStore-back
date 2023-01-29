import express from "express";
import { products } from "../controllers/productController.js";

const productsRouter = express.Router();

productsRouter.get('/products');

export default productsRouter;