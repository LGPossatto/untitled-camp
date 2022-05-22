import "./burg-menu.scss";
import { NavLinks } from "../nav-links/NavLinks";

interface props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgMenu = ({ active, setActive }: props) => {
  return (
    <div className={`burg-menu ${active ? "burg-menu-active" : ""}`}>
      <span className="burg-menu__arrow"></span>
      <NavLinks
        onLinkClick={() => {
          setActive(false);
        }}
        vertical
      ></NavLinks>
    </div>
  );
};
