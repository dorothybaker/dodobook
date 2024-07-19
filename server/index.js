import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";

import { connectToDB } from "./utils/connectToDB.js";
import auth from "./routes/auth.route.js";
import user from "./routes/user.route.js";
import post from "./routes/post.route.js";

config();

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello world from the server!");
});

// Routes
app.use("/api/auth", auth);
app.use("/api/users", user);
app.use("/api/posts", post);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});
