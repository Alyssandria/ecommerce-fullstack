import { Router } from "express";
import { APIROUTES } from "../lib/constants";
import { registerController } from "../controllers/register.controller";

const ROUTES = new APIROUTES()
const router = Router()

router.post(ROUTES.AUTH.SIGNIN, registerController)

export default router
