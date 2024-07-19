import mongoose from "mongoose";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// CREATE POST
export const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  newPost.user = new mongoose.Types.ObjectId(req.body.userId);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET A POST
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE A POST
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post updated successfully!");
    }

    res.status(403).json("Action is forbidden!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE A POST
export const deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post successfully deleted!");
    }

    res.status(403).json("Action is forbidden!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// LIKE / DISLIKE A POST
export const likeAndDislikePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);

    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked successfully!");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post unliked successfully!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET TIMELINE POSTS
export const getTimelinePosts = async (req, res) => {
  const { userId } = req.params;

  try {
    const currentUserPosts = await Post.find({ userId }).populate("user");
    res.status(200).json(
      currentUserPosts.sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL POSTS
export const getPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().populate("user");
    res.status(200).json(
      allPosts.sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
