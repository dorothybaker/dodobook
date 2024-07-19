import { Schema, model } from "mongoose";

const PostSchema = Schema(
  {
    userId: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    likes: [],
    description: String,
    image: String,
    video: String,
  },
  { timestamps: true }
);

const Post = model("Post", PostSchema);
export default Post;
