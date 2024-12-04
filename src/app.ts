import express from "express";
import { connectDB } from "./config/connect";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const MONGO_URI: string = process.env.MONGO_URI as string;

app.use(express.json());

app.use(cors());

app.use("/api/v1", (req, res) => {
  res.send("Hello World!");
});

connectDB(MONGO_URI);

export const viteNodeApp = app;
