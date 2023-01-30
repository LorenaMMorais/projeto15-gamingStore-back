import { Router } from "express"
import { signUp, signIn } from "../controllers/auth.controller.js"
import {
    signUpValidation,
    signInValidation
} from "../middlewares/auth.middleware.js"

const router = Router()

router.post("/sign-up", signUpValidation, signUp)
router.post("/sign-in", signInValidation, signIn)

export default router