import "./radio-input.scss";

interface props {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  active: boolean;
}

export const RadioInput = ({
  label,
  id,
  name,
  value,
  onChange,
  active,
}: props) => {
  const handleOnClick = () => {
    //@ts-ignore
    onChange({ target: { value: value, name: name } });
  };

  return (
    <div
      className={`radio-input ${active ? "radio-input-active" : ""}`}
      onClick={handleOnClick}
    >
      <input
        className=""
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={active}
      />
      <label htmlFor={id} className="fs-m fw-bold">
        {label}
      </label>
    </div>
  );
};
