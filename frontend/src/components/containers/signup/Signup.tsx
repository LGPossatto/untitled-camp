import { useState } from "react";
import { Link } from "react-router-dom";

import { handleSubmit, ISignin, signinValues } from "./utils";

import "./signup.scss";
import { TextInput } from "../../inputs/text-input/TextInput";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const Signup = () => {
  const [state, setState] = useState<ISignin>(signinValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form className="signup" onSubmit={(e) => handleSubmit(e, state, setState)}>
      <h2 className="fs-l">Create an Account</h2>
      <Link to="/login" className="fs-m fc-gray-dark fw-bold">
        or login to your account
      </Link>

      <TextInput
        label="Name"
        name="name"
        placeholder="Your name"
        value={state.name}
        onChange={handleChange}
        errorMsg={state.errorMsg.name}
      ></TextInput>
      <TextInput
        label="Email"
        name="email"
        placeholder="Your email"
        value={state.email}
        onChange={handleChange}
        errorMsg={state.errorMsg.email}
      ></TextInput>
      <TextInput
        type="password"
        label="Password"
        name="password"
        placeholder="Your password"
        value={state.password}
        onChange={handleChange}
        errorMsg={state.errorMsg.password}
      ></TextInput>
      <TextInput
        type="password"
        label="Confirm Your Password"
        name="confirmPassword"
        placeholder="Confirm password"
        value={state.confirmPassword}
        onChange={handleChange}
        errorMsg={state.errorMsg.confirmPassword}
      ></TextInput>
      <CtaBtn type="submit" onClick={() => {}}>
        Create Account
      </CtaBtn>
    </form>
  );
};
