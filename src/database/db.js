import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
    await mongoClient.connect();
    console.log("MongoDB conectado");
} catch (error) {
    console.log(error)
}

const db = mongoClient.db("gamingstore");

export const usersCollection = db.collection("users")
export const sessionsCollection = db.collection("sessions")
export const productsCollection = db.collection("products")
export const purchaseDataCollection = db.collection("purchaseData")