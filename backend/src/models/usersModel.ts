import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "Products",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", usersSchema);
