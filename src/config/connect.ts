import mongoose from "mongoose";

export const connectDB = async (URI: string) => {
  try {
    await mongoose.connect(URI);
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};
