import db from "../db.js";

export async function setCategories(req, res){
    const categories = await db.collection('categories').find({}).toArray();

    res.send(categories);
}