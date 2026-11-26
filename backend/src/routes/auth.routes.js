import { Router } from "express";
// import * as authController from "../controllers/auth.controller.js";
import { register, login, getMe, refreshToken, logout, logoutAll, verifyEmail }
from "../controllers/auth.controller.js";
const authRouter = Router();

// register route
authRouter.post("/register", register);


// login route
authRouter.post("/login", login);

// Get current user route
authRouter.get("/me", getMe);

/**
 * GET /api/auth/refresh-token
 */
authRouter.get("/refresh-token", refreshToken)


/**
 * GET /api/auth/logout
 */
authRouter.get("/logout", logout)


/**
 * GET /api/auth/logout-all
 */
authRouter.get("/logout-all", logoutAll)

/**
 * POST /api/auth/verify-email
 */
authRouter.post("/verify-email", verifyEmail)




export default authRouter;