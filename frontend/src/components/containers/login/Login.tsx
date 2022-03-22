import { useState } from "react";

import { handleSubmit, loginValues, ILogin } from "./utils";

import "./login.scss";
import { TextInput } from "../../inputs/text-input/TextInput";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const Login = () => {
  const [state, setState] = useState<ILogin>(loginValues);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form className="login" onSubmit={(e) => handleSubmit(e, state, setState)}>
      <h2 className="fs-l">Login to Your Account</h2>
      <TextInput
        label="Email"
        name="email"
        value={state.email}
        onChange={handlechange}
        placeholder="Your email"
        errorMsg={state.errorMsg.email}
      ></TextInput>
      <TextInput
        type="password"
        label="Password"
        name="password"
        value={state.password}
        onChange={handlechange}
        placeholder="Your password"
        errorMsg={state.errorMsg.password}
      ></TextInput>

      <CtaBtn type="submit" onClick={() => {}}>
        Confirm
      </CtaBtn>
    </form>
  );
};
