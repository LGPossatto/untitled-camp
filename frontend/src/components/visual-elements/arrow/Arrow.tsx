import "./arrow.scss";

interface props {
  fontSize?: "fs-l" | "fs-m" | "fs-sm" | "fs-r-sm";
  color?: "fc-accent" | "fc-gray";
}

export const Arrow = ({ fontSize = "fs-m", color = "fc-accent" }: props) => {
  return <span className={`arrow ${fontSize} ${color}`}>{">"}</span>;
};
