import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { handleSubmit, loginValues, ILogin } from "./utils";
import { UserContext } from "../../../context/user/UserContext";

import "./login.scss";
import { LoadingBar } from "../../visual-elements/loading-bar/LoadingBar";
import { TextInput } from "../../inputs/text-input/TextInput";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const Login = () => {
  const [state, setState] = useState<ILogin>(loginValues);
  const { isLoading, loginUser } = useContext(UserContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="login"
      onSubmit={(e) => handleSubmit(e, state, setState, loginUser)}
    >
      <h2 className="fs-l">Login to Your Account</h2>
      <Link to="/signup" className="fs-m fc-gray-dark fw-bold">
        or create an account
      </Link>

      <TextInput
        label="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Your email"
        errorMsg={state.errorMsg.email}
      ></TextInput>
      <TextInput
        type="password"
        label="Password"
        name="password"
        value={state.password}
        onChange={handleChange}
        placeholder="Your password"
        errorMsg={state.errorMsg.password}
      ></TextInput>

      <CtaBtn type="submit" onClick={() => {}}>
        Confirm
      </CtaBtn>

      {isLoading && <LoadingBar></LoadingBar>}
    </form>
  );
};
