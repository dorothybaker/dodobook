import { config } from "dotenv";
import mongoose from "mongoose";

config();

export const connectToDB = () => {
  const MONGO_URL = process.env.MONGO_URL;

  try {
    mongoose.connect(MONGO_URL).then(() => console.log("Connected to MONGODB"));
  } catch (error) {
    console.log(error);
  }
};
