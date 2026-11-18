import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const authRouter = Router();

// register route
authRouter.post("/register", register);


// login route
authRouter.post("/login", login);


export default authRouter;