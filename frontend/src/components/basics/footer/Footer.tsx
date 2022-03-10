import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";
import { NavLinks } from "../../containers/nav-links/NavLinks";
import { IconLink } from "../../links/icon-link/IconLink";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h4 className="fs-l fc-reverse">untitled-camp</h4>
        <NavLinks classes="jc-end" color="fc-reverse"></NavLinks>
        <p className="fs-m fc-gray">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          eveniet inventore est! Temporibus ducimus aliquid quisquam iste aut
          hic fuga pariatur suscipit quibusdam illo, ea, animi eveniet dolor!
          Fugit, dolores?
        </p>
        <div className="footer__soc flex jc-end ai-end">
          <IconLink href="/" icon={faTwitter}></IconLink>
          <IconLink href="/" icon={faFacebook}></IconLink>
          <IconLink href="/" icon={faInstagram}></IconLink>
        </div>
        <span className="fs-m fc-gray">
          Copyright 2022. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
