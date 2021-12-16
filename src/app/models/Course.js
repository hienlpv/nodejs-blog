import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", Schema);
