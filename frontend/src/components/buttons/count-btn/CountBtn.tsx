import "./count-btn.scss";

interface props {
  quant: number;
  setQuant?: React.Dispatch<React.SetStateAction<number>>;
  onClickMinus?: Function;
  onClickPlus?: Function;
}

export const CountBtn = ({
  quant,
  setQuant,
  onClickMinus,
  onClickPlus,
}: props) => {
  return (
    <div className="count-btn flex ai-c">
      <button
        className="count-btn__minus fs-m fc-gray-dark fw-bold"
        onClick={() => {
          if (setQuant && quant > 1) setQuant(quant - 1);
          if (onClickMinus) onClickMinus();
        }}
      >
        -
      </button>
      <div className="count-btn__num fs-m fc-gray-dark fw-bold">{quant}</div>
      <button
        className="count-btn__plus fs-m fc-gray-dark fw-bold"
        onClick={() => {
          if (setQuant) setQuant(quant + 1);
          if (onClickPlus) onClickPlus();
        }}
      >
        +
      </button>
    </div>
  );
};
