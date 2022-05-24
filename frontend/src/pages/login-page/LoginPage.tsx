import { useEffect } from "react";

import "./login-page.scss";
import { Login } from "../../components/containers/login/Login";

export const LoginPage = () => {
  useEffect(() => {
    window.alert(
      "If you don't want to create an account, you can enter using this instead:\n\nEmail: john@email.com\nPassword: john123"
    );
  }, []);

  return (
    <div className="login-page flex jc-c container">
      <Login></Login>
    </div>
  );
};
