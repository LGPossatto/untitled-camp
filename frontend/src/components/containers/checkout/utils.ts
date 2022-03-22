import { removeDashSpaceRegex } from "../../../assets/utils/regex";

export interface ICheckout {
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

export const checkoutValues = {
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
  values: ICheckout,
  setValues: React.Dispatch<React.SetStateAction<ICheckout>>
) => {
  e.preventDefault();

  let hasError = false;
  let newErrorMsg = { ...checkoutValues.errorMsg };

  // check if inputs are empty
  for (const key in values) {
    //@ts-ignore
    if (values[key].length < 1) {
      hasError = true;

      //@ts-ignore
      newErrorMsg[key] = "Please fill every field";
    }
  }

  // check phone number
  if (isNaN(values.phone.replace(removeDashSpaceRegex, "") as any)) {
    newErrorMsg.phone = "Phone must be a valid number";
  }

  // check zip code
  if (isNaN(values.zip.replace(removeDashSpaceRegex, "") as any)) {
    newErrorMsg.zip = "Zip code must be valid";
  }

  // check e-number
  if (isNaN(values.eNumber.replace(removeDashSpaceRegex, "") as any)) {
    newErrorMsg.eNumber = "E-Money Number must be valid";
  }

  // check e-pin
  if (isNaN(values.ePin.replace(removeDashSpaceRegex, "") as any)) {
    newErrorMsg.ePin = "E-Money Pin must be valid";
  }

  setValues({ ...values, errorMsg: newErrorMsg });

  console.log("ok");
};
