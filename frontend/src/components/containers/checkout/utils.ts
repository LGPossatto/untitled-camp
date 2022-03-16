export interface Ivalues {
  name: string;
  email: string;
  phone: string;
  adress: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: string;
  eNumber: string;
  ePin: string;
  errorMsg: {
    name: string;
    email: string;
    phone: string;
    adress: string;
    zip: string;
    city: string;
    country: string;
    paymentMethod: string;
    eNumber: string;
    ePin: string;
  };
}

export const initialValues = {
  name: "",
  email: "",
  phone: "",
  adress: "",
  zip: "",
  city: "",
  country: "",
  paymentMethod: "e-money",
  eNumber: "",
  ePin: "",
  errorMsg: {
    name: "",
    email: "",
    phone: "",
    adress: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "",
    eNumber: "",
    ePin: "",
  },
};

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  values: Ivalues,
  setValues: React.Dispatch<React.SetStateAction<Ivalues>>
) => {
  e.preventDefault();

  let hasError = false;
  let newErrorMsg = { ...initialValues.errorMsg };

  console.log(newErrorMsg);

  // check if inputs are empty
  for (const key in values) {
    //@ts-ignore
    if (values[key].length < 1) {
      console.log(key);
      hasError = true;

      //@ts-ignore
      newErrorMsg[key] = "Please fill every field";
    }
  }

  setValues({ ...values, errorMsg: newErrorMsg });

  console.log("ok");
};
