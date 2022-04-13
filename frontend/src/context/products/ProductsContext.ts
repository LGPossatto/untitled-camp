import { createContext } from "react";

export interface Iproduct {
  _id: string;
  image: string;
  name: string;
  desc: string;
  content: string;
  tag: string;
  category: string[];
  fetures: string[];
  price: number;
}

export interface IProducts {
  randomProducts: Iproduct[];
  pageProducts: { [key: string]: Iproduct[] };
  getInitialProducts: () => void;
  getProducts: (page: number | string) => void;
  getRandomlProducts: (quant: number) => void;
  searchProducts: (page: number | string, search: string) => void;
}

export const initialState = {
  randomProducts: [],
  pageProducts: {},
  getInitialProducts: () => {},
  getProducts: (page: number | string) => {},
  getRandomlProducts: (quant: number) => {},
  searchProducts: (page: number | string, search: string) => {},
};

export const ProductsContext = createContext<IProducts>(initialState);
