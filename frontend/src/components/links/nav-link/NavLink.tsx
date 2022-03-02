import { Link } from "react-router-dom";

import "./nav-link.scss";

interface props {
  href: string;
  text: string;
}

export const NavLink = ({ href, text }: props) => {
  return (
    <Link to={href} className="nav-link fs-m fc-reverse fw-bold">
      {text}
    </Link>
  );
};
