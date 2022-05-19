import { IUser } from "./UserContext";
import { userTypes } from "./userTypes";

export const userReducer = (
  state: IUser,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case userTypes.LOADING:
      return { ...state, isLoading: !state.isLoading };
    case userTypes.ERROR_MSG:
      return { ...state, errorMsg: action.payload };
    case userTypes.CLEAR_ERROR_MSG:
      return { ...state, errorMsg: null };
    case userTypes.LOGIN_USER:
      const user = { ...action.payload };
      delete user["products"];

      localStorage.setItem("user", JSON.stringify(action.payload));

      return { ...state, user, cart: [...action.payload.products] };
    case userTypes.LOGOUT_USER:
      localStorage.removeItem("user");

      return { ...state, user: null };
    case userTypes.ADD_TO_CART:
      let found = false;
      const cartItems = state.cart.map((item) => {
        if (item.product._id === action.payload.id) {
          item.quant = item.quant + action.payload.quant;
          found = true;
        }

        return item;
      });

      if (!found)
        cartItems.push({
          product: action.payload.product,
          quant: action.payload.quant,
        });

      return { ...state, cart: cartItems };
    case userTypes.REMOVE_FROM_CART:
      const removedCartItems = state.cart.filter((item) => {
        if (item.product._id === action.payload.id) {
          item.quant = item.quant - action.payload.quant;
        }

        if (item.quant > 0) return item;
      });

      return { ...state, cart: removedCartItems };
    default:
      return state;
  }
};
