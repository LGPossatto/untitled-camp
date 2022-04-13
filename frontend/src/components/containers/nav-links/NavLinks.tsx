import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from "../../../context/user/UserContext";

import "./nav-links.scss";
import { NavLink } from "../../links/nav-link/NavLink";

interface props {
  classes?: string;
  vertical?: boolean;
  color?: "fc-reverse";
}

export const NavLinks = ({ classes, vertical, color }: props) => {
  const { user } = useContext(UserContext);
  const { pathname: path } = useLocation();

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
        <NavLink href="/" text="Home" color={color}></NavLink>
      </li>
      <li>
        <NavLink href="/shop/1" text="Shop" color={color}></NavLink>
      </li>
      <li>
        <NavLink href="/about" text="About" color={color}></NavLink>
      </li>
      <li>
        {user ? (
          <NavLink href="/profile" text="Profile" color={color}></NavLink>
        ) : (
          accountLink()
        )}
      </li>
    </ul>
  );
};
