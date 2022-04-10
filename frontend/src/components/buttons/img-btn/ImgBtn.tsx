import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./img-btn.scss";

interface props {
  img: IconDefinition;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color?: "fc-normal" | "fc-reverse" | "fc-accent" | "fc-gray-dark";
  background?: "normal" | "reverse" | "accent" | "gray-dark" | "transparent";
}

export const ImgBtn = ({
  img,
  onClick,
  color = "fc-gray-dark",
  background = "transparent",
}: props) => {
  return (
    <button
      className={`img-btn fs-l ${color} img-btn-${background}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={img} className="" />
    </button>
  );
};
