import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./img-btn.scss";

interface props {
  img: IconDefinition;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ImgBtn = ({ img, onClick }: props) => {
  return (
    <button className="img-btn fs-l fc-reverse" onClick={onClick}>
      <FontAwesomeIcon icon={img} className="fc-gray-dark" />
    </button>
  );
};
