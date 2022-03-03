import "./burg-menu.scss";
import { NavLinks } from "../nav-links/NavLinks";

interface props {
  active: boolean;
}

export const BurgMenu = ({ active }: props) => {
  return (
    <div className={`burg-menu ${active ? "burg-menu-active" : ""}`}>
      <span className="burg-menu__arrow"></span>
      <NavLinks vertical></NavLinks>
    </div>
  );
};
