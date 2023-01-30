import { productsCollection } from "../database/db.js";

export async function products(req, res) {
    const products = await productsCollection.find({}).toArray();

    res.send(products);
}