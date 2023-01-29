import express from "express";
import { setCategories } from "../controllers/categoriesController.js";

const categoriesRouter = express.Router();

categoriesRouter.get('categories', setCategories);

export default categoriesRouter;