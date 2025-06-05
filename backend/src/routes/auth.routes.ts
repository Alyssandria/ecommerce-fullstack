import { Router } from "express";
import { APIROUTES } from "../lib/constants";
import { loginController } from "../controllers/login.controller";

const ROUTES = new APIROUTES()
const router = Router()

router.post(ROUTES.AUTH.LOGIN, loginController)

export default router
