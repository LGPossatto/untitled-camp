import { emailRegex } from "../../../assets/utils/regex";

export interface ILogin {
  email: string;
  password: string;
  errorMsg: {
    email: string;
    password: string;
  };
}

export const loginValues = {
  email: "",
  password: "",
  errorMsg: {
    email: "",
    password: "",
  },
};

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  values: ILogin,
  setValues: React.Dispatch<React.SetStateAction<ILogin>>,
  loginUser: (email: string, password: string) => void
) => {
  e.preventDefault();

  let hasError = false;
  let newErrorMsg = { ...loginValues.errorMsg };

  // check if inputs are empty
  for (const key in values) {
    //@ts-ignore
    if (values[key].length < 1) {
      hasError = true;

      //@ts-ignore
      newErrorMsg[key] = "Please fill every field";
    }
  }

  if (!emailRegex.test(values.email)) {
    hasError = true;
    newErrorMsg.email = "Please provide a valid email";
  }

  setValues({ ...values, errorMsg: newErrorMsg });

  if (!hasError) {
    loginUser(values.email, values.password);
  }
};
