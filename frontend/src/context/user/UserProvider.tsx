import { FC, useReducer } from "react";

import { serverUrl } from "../../assets/utils/config";
import { userTypes } from "./userTypes";

import { ISingleProduct } from "../products/ProductsContext";

import { initialState, UserContext } from "./UserContext";
import { userReducer } from "./userReducer";

export const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const dispatchLoading = () => {
    dispatch({ type: userTypes.LOADING });
  };

  const getLocalUser = () => {
    const user = localStorage.getItem("user");
    const cart = localStorage.getItem("cart");

    if (user) {
      const payload = { ...JSON.parse(user) };

      if (cart) payload.products = JSON.parse(cart);

      dispatch({
        type: userTypes.LOGIN_USER,
        payload,
      });
    }
  };

  const loginUser = async (email: string, password: string) => {
    dispatchLoading();

    const res = await fetch(`${serverUrl}users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.status.ok) {
      dispatch({ type: userTypes.CLEAR_ERROR_MSG });
      dispatch({ type: userTypes.LOGIN_USER, payload: data.content.payload });
    } else {
      dispatch({ type: userTypes.ERROR_MSG, payload: data.status.errorMsg });
    }

    dispatchLoading();
  };

  const createUser = async (name: string, email: string, password: string) => {
    dispatchLoading();
    const res = await fetch(`${serverUrl}users/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (data.status.ok) {
      dispatch({ type: userTypes.CLEAR_ERROR_MSG });
      dispatch({ type: userTypes.LOGIN_USER, payload: data.content.payload });
    } else {
      dispatch({ type: userTypes.ERROR_MSG, payload: data.status.errorMsg });
    }

    dispatchLoading();
  };

  const logoutUser = () => {
    dispatch({ type: userTypes.LOGOUT_USER });
  };

  const addToCart = async (
    id: string,
    quant: number,
    product: ISingleProduct
  ) => {
    const res = await fetch(`${serverUrl}users/cart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.user.token}`,
      },
      body: JSON.stringify({ quant: quant }),
    });

    const data = await res.json();

    if (data.status.ok) {
      dispatch({
        type: userTypes.ADD_TO_CART,
        payload: { id: data.content.payload, quant, product },
      });
    }
  };

  const removeFromCart = async (id: string, quant: number) => {};

  const value = {
    isLoading: state.isLoading,
    errorMsg: state.errorMsg,
    user: state.user,
    cart: state.cart,
    loginUser,
    logoutUser,
    createUser,
    getLocalUser,
    addToCart,
    removeFromCart,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
