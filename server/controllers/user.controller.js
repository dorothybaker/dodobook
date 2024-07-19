import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

import { config } from "dotenv";

config();

// GETTING THE USER
export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) res.status(404).json("User does not exist!");

    const { password, ...userInfo } = user._doc;
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATING THE USER
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { currentUserId } = req.body;

  if (id === currentUserId) {
    try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });

      const { password, ...userInfo } = user._doc;
      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
      );
      return res.status(200).json({ userInfo, token });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  return res.status(403).json("You can only update your own profile!");
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { currentUserId } = req.body;

  if (id === currentUserId) {
    try {
      await User.findByIdAndDelete(id);

      res.status(200).json("User deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  res.status(403).json("You can only delete your own profile!");
};

// FOLLOW A USER
export const followUser = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.body;

  if (id === _id)
    return res.status(403).json("You can not follow your own profile!");

  try {
    const followUser = await User.findById(id);
    const followingUser = await User.findById(_id);

    if (!followUser.followers.includes(_id)) {
      await followUser.updateOne({ $push: { followers: _id } });
      await followingUser.updateOne({ $push: { following: id } });

      return res.status(200).json("User followed successfully!");
    }

    return res.status(401).json("User already followed by you!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// UNFOLLOW A USER
export const unFollowUser = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.body;

  if (id === _id)
    return res.status(403).json("You can not follow your own profile!");

  try {
    const followUser = await User.findById(id);
    const followingUser = await User.findById(_id);

    if (followUser.followers.includes(_id)) {
      await followUser.updateOne({ $pull: { followers: _id } });
      await followingUser.updateOne({ $pull: { following: id } });

      return res.status(200).json("User unfollowed successfully!");
    }

    return res.status(401).json("User is not followed by you!");
  } catch (error) {
    res.status(500).json(error);
  }
};
