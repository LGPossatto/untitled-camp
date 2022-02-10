import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    price: { type: Number, required: true },
    tag: { type: String, required: true },
    category: { type: [String], required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    fetures: { type: [String], required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Products", productsSchema);
