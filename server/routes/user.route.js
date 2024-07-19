import { Router } from "express";
import {
  deleteUser,
  followUser,
  getUser,
  unFollowUser,
  updateUser,
} from "../controllers/user.controller.js";

const user = Router();

user.get("/:id", getUser);
user.put("/:id", updateUser);
user.delete("/:id", deleteUser);
user.put("/:id/follow", followUser);
user.put("/:id/unfollow", unFollowUser);

export default user;
