import { Router } from "express";
import * as postController from "../controllers/post.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { receivePostImage } from "../middlewares/image-upload.middleware.js";

const postRouter = Router();

postRouter.use(requireAuth);
postRouter.get("/", postController.getPosts);
postRouter.get("/feed", postController.getFeed);
postRouter.post("/", receivePostImage, postController.createPost);
postRouter.get("/:postId", postController.getPost);
postRouter.patch("/:postId", receivePostImage, postController.updatePost);
postRouter.delete("/:postId", postController.deletePost);
postRouter.post("/:postId/like", postController.likePost);
postRouter.delete("/:postId/like", postController.unlikePost);
postRouter.get("/:postId/likes", postController.getPostLikes);
postRouter.get("/:postId/comments", postController.getComments);
postRouter.post("/:postId/comments", postController.addComment);
postRouter.delete("/comments/:commentId", postController.deleteComment);

export default postRouter;
