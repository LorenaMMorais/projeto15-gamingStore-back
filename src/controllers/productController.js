import { productsCollection } from "../database/db.js";

export async function postProducts(req, res){
    const {name, image, value, category} = req.body;
    const newProduct = {
        name,
        image, 
        value,
        category
    };

    try{
        await productsCollection.insertOne({newProduct});
        res.status(201).send('Produto criado');
    }catch(error){
        console.log(error);
        res.status(500).send('Erro ao criar produto');
    }
}

export async function getProducts(req, res){
    try{
        const body = req.body;

        const products = await productsCollection.find({}).toArray();

        res.send(products);
    }catch(error){
        console.log(error);
        res.status(500).send('Não foi possível encontrar os produtos')
    }
}