import { FC, MouseEventHandler } from "react";

import "./cta-btn.scss";

interface props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  responsive?: boolean;
  small?: boolean;
  color?: "black" | "transparent" | "color";
}

export const CtaBtn: FC<props> = ({
  children,
  onClick,
  responsive,
  type = "button",
  color = "color",
  small = false,
}) => {
  return (
    <button
      type={type}
      className={`cta-btn fw-bold cta-btn-${color} ${
        color === "black" ? "fc-reverse" : ""
      } ${responsive ? "fs-r-m" : "fs-m"} ${small ? "cta-btn-small" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
