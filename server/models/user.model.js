import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String },
    email: { type: String },
    profilePic: String,
    coverPic: String,
    caption: String,
    birthday: String,
    gender: String,
    studiedAt: String,
    livesIn: String,
    country: String,
    worksAs: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

const User = model("User", UserSchema);
export default User;
