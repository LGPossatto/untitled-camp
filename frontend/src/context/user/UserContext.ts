import { createContext } from "react";

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
    product: {
      _id: string;
      image: string;
      price: number;
      tag: string;
      category: string[];
      name: string;
      desc: string;
      fetures: string[];
      content: string;
    };
    quant: number;
  }[];
  loginUser: (email: string, password: string) => void;
}

export const initialState = {
  isLoading: false,
  errorMsg: null,
  user: null,
  cart: [],
  loginUser: (email: string, password: string) => {},
};

export const UserContext = createContext<IUser>(initialState);
