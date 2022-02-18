import mongoose from "mongoose";

export interface cartInterface {
  product: mongoose.Types.ObjectId;
  quant: Number;
}

export type userType = {
  id: string;
  name: string;
  email: string;
  password: string;
  products: cartInterface[];
};
