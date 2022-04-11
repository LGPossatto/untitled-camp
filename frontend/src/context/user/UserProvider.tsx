import { FC, useReducer } from "react";

import { serverUrl } from "../../assets/utils/config";
import { userTypes } from "./userTypes";

import { initialState, UserContext } from "./UserContext";
import { userReducer } from "./userReducer";

export const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const dispatchLogin = () => {
    dispatch({ type: userTypes.LOADING });
  };

  const loginUser = async (email: string, password: string) => {
    dispatchLogin();

    const res = await fetch(`${serverUrl}users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status.ok) {
      dispatch({ type: userTypes.LOGIN_USER, payload: data.content.payload });
    } else {
      dispatch({ type: userTypes.ERROR_MSG, payload: data.status.errorMsg });
    }

    dispatchLogin();
  };

  const value = {
    isLoading: state.isLoading,
    errorMsg: null,
    user: state.user,
    cart: state.cart,
    loginUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
