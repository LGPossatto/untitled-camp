import mongoose from "mongoose";

export type userType = {
  id: string;
  name: string;
  email: string;
  password: string;
  products: { _id: mongoose.Types.ObjectId; quant: Number }[];
};
