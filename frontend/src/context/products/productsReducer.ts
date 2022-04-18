import { IProducts } from "./ProductsContext";
import { productsTypes } from "./productsTypes";

export const productsReducer = (
  state: IProducts,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case productsTypes.GET_RANDOM_PRODUCTS:
      return { ...state, randomProducts: [...action.payload] };
    case productsTypes.GET_PRODUCTS:
      return {
        ...state,
        pageProducts: {
          ...state.pageProducts,
          [action.payload.page]: [...action.payload.content],
        },
      };
    case productsTypes.SEARCH_PRODUCTS:
      const newCategoryProd = { ...state.categoryProducts };

      if (!state.categoryProducts[action.payload.tags]) {
        newCategoryProd[action.payload.tags] = {};
      }

      newCategoryProd[action.payload.tags][action.payload.page] = [
        ...action.payload.content,
      ];

      return {
        ...state,
        categoryProducts: newCategoryProd,
      };
    default:
      return state;
  }
};
