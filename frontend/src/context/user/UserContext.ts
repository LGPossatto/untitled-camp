import { createContext } from "react";
import { ISingleProduct } from "../products/ProductsContext";

export interface IUser {
  isLoading: boolean;
  errorMsg: string | null;
  user: {
    id: string;
    name: string;
    email: string;
    token: string;
  } | null;
  cart: {
    product: ISingleProduct;
    quant: number;
  }[];
  loginUser: (email: string, password: string) => void;
  createUser: (name: string, email: string, password: string) => void;
  logoutUser: () => void;
  getLocalUser: () => void;
  addToCart: (id: string, quant: number, product: ISingleProduct) => void;
  removeFromCart: (id: string, quant: number, product: ISingleProduct) => void;
}

export const initialState = {
  isLoading: false,
  errorMsg: null,
  user: null,
  cart: [],
  loginUser: (email: string, password: string) => {},
  createUser: (name: string, email: string, password: string) => {},
  logoutUser: () => {},
  getLocalUser: () => {},
  addToCart: (id: string, quant: number, product: ISingleProduct) => {},
  removeFromCart: (id: string, quant: number, product: ISingleProduct) => {},
};

export const UserContext = createContext<IUser>(initialState);
