import { NavLink } from "../../links/nav-link/NavLink";
import "./nav-links.scss";

export const NavLinks = () => {
  return (
    <ul className="nav-links flex jc-sb ai-c">
      <li>
        <NavLink href="/" text="Test"></NavLink>
      </li>
      <li>
        <NavLink href="/" text="Test"></NavLink>
      </li>
      <li>
        <NavLink href="/" text="Test"></NavLink>
      </li>
      <li>
        <NavLink href="/" text="Test"></NavLink>
      </li>
    </ul>
  );
};
