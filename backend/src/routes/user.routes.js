import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.use(requireAuth);
userRouter.get("/me", userController.getMyProfile);
userRouter.get("/suggestions", userController.getSuggestions);
userRouter.get("/:userId/posts", userController.getUserPosts);
userRouter.post("/:userId/follow", userController.followUser);
userRouter.delete("/:userId/follow", userController.unfollowUser);
userRouter.get("/:userId/followers", userController.getFollowers);
userRouter.get("/:userId/following", userController.getFollowing);
userRouter.get("/:username", userController.getProfile);

export default userRouter;
