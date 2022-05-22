import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from "../../../context/user/UserContext";

import "./nav-links.scss";
import { NavLink } from "../../links/nav-link/NavLink";

interface props {
  classes?: string;
  vertical?: boolean;
  color?: "fc-reverse";
  onLinkClick?: Function;
}

export const NavLinks = ({ classes, vertical, color, onLinkClick }: props) => {
  const { user } = useContext(UserContext);
  const { pathname: path } = useLocation();

  const accountLink = () => {
    switch (path) {
      case "/login":
        return (
          <NavLink
            onClick={onLinkClick}
            href="/signup"
            text="Signup"
            color={color}
          ></NavLink>
        );
      default:
        return (
          <NavLink
            onClick={onLinkClick}
            href="/login"
            text="Login"
            color={color}
          ></NavLink>
        );
    }
  };

  return (
    <ul
      className={`nav-links ${classes ? classes : ""} ${
        vertical ? "nav-links-vertical" : "flex jc-sb ai-c"
      }`}
    >
      <li>
        <NavLink
          onClick={onLinkClick}
          href="/"
          text="Home"
          color={color}
        ></NavLink>
      </li>
      <li>
        <NavLink
          onClick={onLinkClick}
          href="/shop/1"
          text="Shop"
          color={color}
        ></NavLink>
      </li>
      <li>
        <NavLink
          onClick={onLinkClick}
          href="/about"
          text="About"
          color={color}
        ></NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
            onClick={onLinkClick}
            href="/profile"
            text="Profile"
            color={color}
          ></NavLink>
        ) : (
          accountLink()
        )}
      </li>
    </ul>
  );
};
