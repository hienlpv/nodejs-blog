import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/hblog_dev");
    console.log("Database Connected!!!");
  } catch (error) {
    console.log(error.message);
  }
};
