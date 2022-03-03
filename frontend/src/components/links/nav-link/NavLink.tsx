import { Link } from "react-router-dom";

import "./nav-link.scss";

interface props {
  href: string;
  text: string;
  color?: "fc-reverse";
}

export const NavLink = ({ href, text, color }: props) => {
  return (
    <Link to={href} className={`nav-link fs-m fw-bold ${color ? color : ""}`}>
      {text}
    </Link>
  );
};
