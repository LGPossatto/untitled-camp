import { FC, useReducer } from "react";

import { serverUrl } from "../../assets/utils/config";

import { initialState, ProductsContext } from "./productsContext";
import { productsReducer } from "./ProductsReducer";

export const ProductsProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getInitialProducts = async () => {
    console.log(`${serverUrl}products/?page=1`);
    const res = await fetch(`${serverUrl}products/?page=1`);
    const data = await res.json();

    console.log(data);
  };

  return (
    <ProductsContext.Provider value={{ getInitialProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
