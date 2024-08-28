import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users";

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRoutes);

app.listen(7000, () => {
  console.log("server running on localhost:7000");
});
