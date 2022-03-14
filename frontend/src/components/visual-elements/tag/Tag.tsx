import "./tag.scss";

interface props {
  text: string;
  fontSize?: "fs-l" | "fs-m" | "fs-sm" | "fs-r-sm";
  fontColor?: "fc-accent" | "fc-gray";
}

export const Tag = ({
  text,
  fontSize = "fs-m",
  fontColor = "fc-accent",
}: props) => {
  return <span className={`tag ${fontSize} ${fontColor}`}>{text}</span>;
};
