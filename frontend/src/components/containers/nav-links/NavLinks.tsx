import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./nav-links.scss";
import { NavLink } from "../../links/nav-link/NavLink";

interface props {
  classes?: string;
  vertical?: boolean;
  color?: "fc-reverse";
}

export const NavLinks = ({ classes, vertical, color }: props) => {
  const { pathname: path } = useLocation();

  useEffect(() => {
    console.log(path);
  }, [path]);

  const accountLink = () => {
    switch (path) {
      case "/login":
        return <NavLink href="/signup" text="Signup" color={color}></NavLink>;
      default:
        return <NavLink href="/login" text="Login" color={color}></NavLink>;
    }
  };

  return (
    <ul
      className={`nav-links ${classes ? classes : ""} ${
        vertical ? "nav-links-vertical" : "flex jc-sb ai-c"
      }`}
    >
      <li>
        <NavLink href="/" text="Test" color={color}></NavLink>
      </li>
      <li>
        <NavLink href="/" text="Test" color={color}></NavLink>
      </li>
      <li>
        <NavLink href="/" text="Test" color={color}></NavLink>
      </li>
      <li>{accountLink()}</li>
    </ul>
  );
};
