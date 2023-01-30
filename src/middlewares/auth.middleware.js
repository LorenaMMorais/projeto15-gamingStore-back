import { signUpSchema, signInSchema } from "../schema/user.schema.js"
import { usersCollection } from "../database/db.js"
import bcrypt from "bcrypt"

export async function signUpValidation(req, res, next) {
    const user = req.body

    const { error } = signUpSchema.validate(user, { abortEarly: false })

    if (error) {
        const errorsMessage = error.details.map(detail => detail.message)
        return res.status(422).send(errorsMessage)
    }

    const checkUserByEmail = await usersCollection.findOne({ email: user.email })

    if (checkUserByEmail) return res.status(400).send("Esse usuário já existe")

    res.locals.user = user

    next()
}

export async function signInValidation(req, res, next) {
    const frontUser = req.body

    const { error } = signInSchema.validate(frontUser, { abortEarly: false })

    if (error) {
        const errorsMessage = error.details.map(detail => detail.message)
        res.status(422).send(errorsMessage)
    }

    try {
        const dbUser = await usersCollection.findOne({ email: frontUser.email })

        if (!dbUser) return res.status(401).send("E-mail ou senha inválidos")

        const isCorrectPassword = bcrypt.compareSync(frontUser.password, dbUser.password)

        if (!isCorrectPassword) return res.status(401).send("E-mail ou senha inválidos")

        res.locals.user = dbUser

    } catch (error) {
        console.error(error)
        res.status(500).send("Houve um problema no servidor")
    }

    next()
}