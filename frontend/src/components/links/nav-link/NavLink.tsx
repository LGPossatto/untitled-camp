import { Link } from "react-router-dom";

import "./nav-link.scss";

interface props {
  href: string;
  text: string;
  color?: "fc-reverse";
  onClick?: Function;
}

export const NavLink = ({ href, text, color, onClick }: props) => {
  return (
    <Link
      to={href}
      onClick={() => {
        if (onClick) onClick();
      }}
      className={`nav-link fs-m fw-bold ${color ? color : ""}`}
    >
      {text}
    </Link>
  );
};
