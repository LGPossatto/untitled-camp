import { emailRegex } from "../../../assets/utils/regex";

export interface ISignin {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  errorMsg: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

export const signinValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  errorMsg: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  values: ISignin,
  setValues: React.Dispatch<React.SetStateAction<ISignin>>
) => {
  e.preventDefault();

  let hasError = false;
  let newErrorMsg = { ...signinValues.errorMsg };

  // check if inputs are empty
  for (const key in values) {
    //@ts-ignore
    if (values[key].length < 1) {
      hasError = true;

      //@ts-ignore
      newErrorMsg[key] = "Please fill every field";
    }
  }

  if (values.password !== values.confirmPassword) {
    newErrorMsg.password = "Passwords must be equals";
    newErrorMsg.confirmPassword = "Passwords must be equals";
  }

  if (!emailRegex.test(values.email)) {
    newErrorMsg.email = "Please provide a valid email";
  }

  setValues({ ...values, errorMsg: newErrorMsg });

  console.log("ok");
};
