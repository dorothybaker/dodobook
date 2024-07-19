import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

import { config } from "dotenv";

config();

// REGISTERING A NEW USER
export const register = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  // HASHED PASSWORD
  const hashedPassword = bcrypt.hashSync(password, 12);

  try {
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      });
      const user = await newUser.save();
      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
      );
      const { password, ...userInfo } = user._doc;
      return res.status(200).json({ userInfo, token });
    } else {
      return res.status(403).json("User already exists!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// LOGGING IN USER
export const login = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json("Incorrect username or password!");

    const isCorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isCorrectPassword)
      return res.status(401).json("Incorrect username or password!");

    const { password, ...userInfo } = user._doc;
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    return res.status(200).json({ userInfo, token });
  } catch (error) {
    res.status(500).json(error);
  }
};
