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
      return { ...state, user: null };
    default:
      return state;
  }
};
