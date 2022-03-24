import { createContext } from "react";

export const initialState = {
  text: "abc",
  getInitialProducts: () => {},
};

export const ProductsContext = createContext(initialState);
