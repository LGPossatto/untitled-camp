import { FC, useReducer } from "react";

import { removeSymbols } from "../../assets/utils/removeSymbols";
import { serverUrl } from "../../assets/utils/config";
import { productsTypes } from "./productsTypes";

import { initialState, ProductsContext } from "./ProductsContext";
import { productsReducer } from "./productsReducer";

export const ProductsProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getInitialProducts = async () => {
    const res = await fetch(`${serverUrl}products/?page=1`);
    const data = await res.json();

    console.log(data);
  };

  const getProducts = async (page: number | string) => {
    if (state.pageProducts[page]) return;

    const res = await fetch(`${serverUrl}products/?page=${page}`);
    const data = await res.json();

    if (data.status.ok) {
      dispatch({
        type: productsTypes.GET_PRODUCTS,
        payload: { page, content: data.content.payload },
      });
    }
  };

  const getRandomlProducts = async (quant: number) => {
    if (state.randomProducts.length >= quant) return;

    const res = await fetch(`${serverUrl}products/random/?quant=${quant}`);
    const data = await res.json();

    if (data.status.ok) {
      dispatch({
        type: productsTypes.GET_RANDOM_PRODUCTS,
        payload: data.content.payload,
      });
    }
  };

  const searchProducts = async (page: number | string, search: string) => {
    const field = search.split("&")[0].split("=")[1];
    const categories = search.split("&")[1];

    if (
      state.categoryProducts[removeSymbols(categories)] &&
      state.categoryProducts[removeSymbols(categories)][page] &&
      field.length <= 0
    )
      return;

    const res = await fetch(
      `${serverUrl}products/?field=${field}&${categories}&page=${page}`
    );
    const data = await res.json();

    if (data.status.ok) {
      if (field.length > 0) {
        dispatch({
          type: productsTypes.SEARCH_WITH_FIELD_PRODUCTS,
          payload: {
            page,
            content: data.content.payload,
            tags: removeSymbols(categories),
          },
        });
      } else {
        dispatch({
          type: productsTypes.SEARCH_PRODUCTS,
          payload: {
            page,
            content: data.content.payload,
            tags: removeSymbols(categories),
          },
        });
      }
    }
  };

  const value = {
    randomProducts: state.randomProducts,
    pageProducts: state.pageProducts,
    categoryProducts: state.categoryProducts,
    fieldProducts: state.fieldProducts,
    getInitialProducts,
    getProducts,
    getRandomlProducts,
    searchProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
