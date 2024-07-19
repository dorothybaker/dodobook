import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getTimelinePosts,
  likeAndDislikePost,
  updatePost,
} from "../controllers/post.contoller.js";

const post = Router();

post.post("/", createPost);
post.get("/:id", getPost);
post.put("/:id", updatePost);
post.delete("/:id", deletePost);
post.put("/:id/like", likeAndDislikePost);
post.get("/", getPosts);
post.get("/:userId/timeline", getTimelinePosts);

export default post;
