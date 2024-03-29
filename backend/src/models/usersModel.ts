import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    products: {
      type: [
        {
          product: {
            type: mongoose.Types.ObjectId,
            required: true,
            unique: true,
            sparce: true,
            ref: "Products",
          },
          quant: { type: Number, required: true },
        },
      ],
      unique: false,
      sparce: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", usersSchema);
