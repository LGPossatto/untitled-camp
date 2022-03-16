import { useState } from "react";

import { handleSubmit, initialValues, Ivalues } from "./utils";

import "./checkout.scss";
import { Tag } from "../../visual-elements/tag/Tag";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";
import { TextInput } from "../../inputs/text-input/TextInput";
import { RadioInput } from "../../inputs/radio-input/RadioInput";

export const Checkout = () => {
  const [values, setValues] = useState<Ivalues>(initialValues);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="checkout container"
      onSubmit={(e) => handleSubmit(e, values, setValues)}
    >
      <h2 className="fs-xl">Checkout</h2>
      <div className="checkout__billing">
        <Tag text="Billing Details" fontColor="fc-accent" fontSize="fs-m"></Tag>
        <div className="">
          <TextInput
            label="Name"
            name="name"
            placeholder="John Doe"
            value={values.name}
            onChange={handlechange}
          ></TextInput>
          <TextInput
            label="Email"
            name="email"
            placeholder="john@email.com"
            value={values.email}
            onChange={handlechange}
          ></TextInput>
          <TextInput
            label="Phone Number"
            name="phone"
            placeholder="+55 45 12345-6789"
            value={values.phone}
            onChange={handlechange}
          ></TextInput>
        </div>
      </div>
      <div className="checkout__shipping">
        <Tag text="Shipping Info" fontColor="fc-accent" fontSize="fs-m"></Tag>
        <div className="">
          <TextInput
            label="Adress"
            name="adress"
            placeholder="Av. Random Place, 123"
            value={values.adress}
            onChange={handlechange}
          ></TextInput>
          <TextInput
            label="City"
            name="city"
            placeholder="Foz do Iguaçu"
            value={values.city}
            onChange={handlechange}
          ></TextInput>
          <TextInput
            label="Country"
            name="country"
            placeholder="Brazil"
            value={values.country}
            onChange={handlechange}
          ></TextInput>
          <TextInput
            label="Zip Code"
            name="zip"
            placeholder="12345-123"
            value={values.zip}
            onChange={handlechange}
          ></TextInput>
        </div>
      </div>
      <div className="checkout__payment">
        <Tag text="Payment Details" fontColor="fc-accent" fontSize="fs-m"></Tag>
        <div className="">
          <div className="radio-inputs">
            <h3 className="fs-m">Payment Method</h3>
            <RadioInput
              id="e-money"
              label="e-Money"
              name="paymentMethod"
              value="e-money"
              onChange={handlechange}
              active={values.paymentMethod === "e-money"}
            ></RadioInput>
            <RadioInput
              id="cash"
              label="Cash on Delivery"
              name="paymentMethod"
              value="cash"
              onChange={handlechange}
              active={values.paymentMethod === "cash"}
            ></RadioInput>
          </div>
          <TextInput
            label="e-Money Number"
            name="eNumber"
            placeholder="1234567890"
            value={values.eNumber}
            onChange={handlechange}
          ></TextInput>
          <TextInput
            label="e-Money Pin"
            name="ePin"
            placeholder="12345"
            value={values.ePin}
            onChange={handlechange}
          ></TextInput>
        </div>
      </div>
      <CtaBtn type="submit" onClick={() => {}}>
        Confirm
      </CtaBtn>
    </form>
  );
};
