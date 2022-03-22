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
  setValues: React.Dispatch<React.SetStateAction<ILogin>>
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

  setValues({ ...values, errorMsg: newErrorMsg });

  console.log("ok");
};
