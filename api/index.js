import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import cors from "cors";
import path from "path";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);

app.use((err, req, res, next) => {
  //middleware for handling errors
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
