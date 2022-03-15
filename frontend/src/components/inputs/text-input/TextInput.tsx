import "./text-input.scss";

interface props {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number" | "email";
  errorMsg?: string;
  placeholder?: string;
}

export const TextInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  errorMsg = "",
}: props) => {
  return (
    <div className="text-input flex flex-fd-c">
      <label htmlFor={name} className="fs-m fw-bold">
        {label}
      </label>
      <input
        className={`fs-m fc-gray-dark ${errorMsg ? "error-input" : ""}`}
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="fs-m fc-accent">{errorMsg ? `*${errorMsg}!` : ""}</span>
    </div>
  );
};
