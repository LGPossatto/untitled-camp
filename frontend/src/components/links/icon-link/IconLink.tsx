import { Link } from "react-router-dom";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./icon-link.scss";

interface props {
  href: string;
  icon: IconProp;
}

export const IconLink = ({ href, icon }: props) => {
  return (
    <Link to={href} className="icon-link fs-l fc-reverse">
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};
