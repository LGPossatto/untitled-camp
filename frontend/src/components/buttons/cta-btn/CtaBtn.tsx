import { FC, MouseEventHandler } from "react";

import "./cta-btn.scss";

interface props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  responsive?: boolean;
}

export const CtaBtn: FC<props> = ({ children, onClick, responsive }) => {
  return (
    <button
      className={`cta-btn fw-b ${responsive ? "fs-r-m" : "fs-m"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
