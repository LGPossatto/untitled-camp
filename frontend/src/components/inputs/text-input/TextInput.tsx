import "./text-input.scss";

interface props {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: "text" | "number" | "email" | "password";
  errorMsg?: string;
  placeholder?: string;
}

export const TextInput = ({
  name,
  value,
  onChange,
  label = "",
  type = "text",
  placeholder = "",
  errorMsg = "",
}: props) => {
  return (
    <div className="text-input flex flex-fd-c">
      <label
        htmlFor={name}
        className={`fs-m fw-bold ${!label ? "display-none" : ""}`}
      >
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
