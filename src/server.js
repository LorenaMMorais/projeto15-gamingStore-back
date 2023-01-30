import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes.js"
import productsRoutes from "./routes/productsRouter.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use([authRoutes, productsRoutes])

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running in port: ${port}`));