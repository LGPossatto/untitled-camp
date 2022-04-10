import { Link } from "react-router-dom";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./icon-link.scss";

interface props {
  href: string;
  icon: IconProp;
  color?: "fc-normal" | "fc-reverse";
}

export const IconLink = ({ href, icon, color = "fc-reverse" }: props) => {
  return (
    <Link to={href} className={`icon-link fs-l ${color}`}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};
