import { NavLink } from "../../links/nav-link/NavLink";
import "./nav-links.scss";

interface props {
  classes?: string;
  vertical?: boolean;
  color?: "fc-reverse";
}

export const NavLinks = ({ classes, vertical, color }: props) => {
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
      <li>
        <NavLink href="/" text="Test" color={color}></NavLink>
      </li>
    </ul>
  );
};
