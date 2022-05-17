import { createContext } from "react";

export interface Iproduct {
  id: string;
  image: string;
  name: string;
  desc: string;
  price: number;
}

export interface ISingleProduct {
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
  singleProduct: ISingleProduct | null;
  pageProducts: { [key: string]: Iproduct[] };
  categoryProducts: { [key: string]: { [key: string]: Iproduct[] } };
  fieldProducts: { [key: string]: Iproduct[] };
  getInitialProducts: () => void;
  getProductById: (id: number | string) => void;
  getProducts: (page: number | string) => void;
  getRandomlProducts: (quant: number) => void;
  searchProducts: (page: number | string, search: string) => void;
}

export const initialState = {
  randomProducts: [],
  singleProduct: null,
  pageProducts: {},
  categoryProducts: {},
  fieldProducts: {},
  getInitialProducts: () => {},
  getProductById: (id: number | string) => {},
  getProducts: (page: number | string) => {},
  getRandomlProducts: (quant: number) => {},
  searchProducts: (page: number | string, search: string) => {},
};

export const ProductsContext = createContext<IProducts>(initialState);
