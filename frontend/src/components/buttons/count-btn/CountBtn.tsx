import { useState } from "react";

import "./count-btn.scss";

interface props {
  quant: number;
  setQuant: React.Dispatch<React.SetStateAction<number>>;
}

export const CountBtn = ({ quant, setQuant }: props) => {
  return (
    <div className="count-btn flex ai-c">
      <button
        className="count-btn__minus fs-m fc-gray-dark fw-bold"
        onClick={() => {
          if (quant > 1) setQuant(quant - 1);
        }}
      >
        -
      </button>
      <div className="count-btn__num fs-m fc-gray-dark fw-bold">{quant}</div>
      <button
        className="count-btn__plus fs-m fc-gray-dark fw-bold"
        onClick={() => setQuant(quant + 1)}
      >
        +
      </button>
    </div>
  );
};
