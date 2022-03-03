import { Link } from "react-router-dom";

import "./nav.scss";
import { NavLinks } from "../../containers/nav-links/NavLinks";
import { IconBtn } from "../../links/icon-link/IconLink";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { BurgBtn } from "../../buttons/burg-btn/BurgBtn";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="container flex jc-sb ai-c">
        <BurgBtn classes="nav__burg hide-on-desktop"></BurgBtn>
        <div className="flex-1">
          <Link to="/" className="fs-l fw-bold fc-reverse">
            untitled-camp
          </Link>
        </div>
        <NavLinks classes="flex-1 hide-on-mobile" color="fc-reverse"></NavLinks>
        <div className="flex-1 flex jc-end">
          <IconBtn href="/" icon={faCartShopping}></IconBtn>
        </div>
        <span className="nav__border"></span>
      </div>
    </nav>
  );
};
