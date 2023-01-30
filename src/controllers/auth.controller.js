import bcrypt from "bcrypt"
import { v4 as uuidv4 } from "uuid"
import { usersCollection, sessionsCollection } from "../database/db.js"

export async function signUp(req, res) {
    const newUser = res.locals.user
    const hash = bcrypt.hashSync(newUser.password, 10)

    try {
        await usersCollection.insertOne({ ...newUser, password: hash })
        res.status(201).send("Usuário cadastrado com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

export async function signIn(req, res) {
    const user = res.locals.user
    const token = uuidv4()

    try {
        await sessionsCollection.insertOne({ userId: user._id, token })
        res.send({ token })
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
    }
}