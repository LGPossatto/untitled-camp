import { Link } from "react-router-dom";

import "./text-link.scss";

interface props {
  text: string;
  link: string;
}

export const TextLink = ({ text, link }: props) => {
  return (
    <Link to={link} className="text-link fs-sm fc-gray-dark">
      {text}
    </Link>
  );
};
