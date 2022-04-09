import { createContext } from "react";

export const initialState = {
  getInitialProducts: () => {},
};

export const ProductsContext = createContext(initialState);
