import { Router } from "express";
import * as adminController from "../controllers/admin.controller.js";
import { requireAuth, requireAdmin } from "../middlewares/auth.middleware.js";

const adminRouter = Router();

adminRouter.use(requireAuth, requireAdmin);
adminRouter.get("/users", adminController.getUsers);
adminRouter.patch("/users/:userId/role", adminController.updateUserRole);

export default adminRouter;


