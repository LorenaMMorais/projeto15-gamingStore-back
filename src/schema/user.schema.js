import joi from "joi"

export const signUpSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})

export const signInSchema = joi.object({
    email: joi.required(),
    password: joi.required()
})