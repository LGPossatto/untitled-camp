import { useState } from "react";

import "./count-btn.scss";

interface props {}

export const CountBtn = ({}: props) => {
  const [number, setNumber] = useState(0);

  return (
    <div className="count-btn flex ai-c">
      <button
        className="count-btn__minus fs-m fc-gray-dark fw-bold"
        onClick={() => setNumber(number - 1)}
      >
        -
      </button>
      <div className="count-btn__num fs-m fc-gray-dark fw-bold">{number}</div>
      <button
        className="count-btn__plus fs-m fc-gray-dark fw-bold"
        onClick={() => setNumber(number + 1)}
      >
        +
      </button>
    </div>
  );
};
