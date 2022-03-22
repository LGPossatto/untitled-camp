import { useState } from "react";

import { handleSubmit, checkoutValues, ICheckout } from "./utils";

import "./checkout.scss";
import { Tag } from "../../visual-elements/tag/Tag";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";
import { TextInput } from "../../inputs/text-input/TextInput";
import { RadioInput } from "../../inputs/radio-input/RadioInput";

export const Checkout = () => {
  const [state, setState] = useState<ICheckout>(checkoutValues);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="checkout"
      onSubmit={(e) => handleSubmit(e, state, setState)}
    >
      <h2 className="fs-xl">Checkout</h2>
      <div className="checkout__billing">
        <Tag text="Billing Details" fontColor="fc-accent" fontSize="fs-m"></Tag>
        <div className="">
          <TextInput
            label="Name"
            name="name"
            placeholder="John Doe"
            value={state.name}
            onChange={handlechange}
            errorMsg={state.errorMsg.name}
          ></TextInput>
          <TextInput
            label="Email"
            name="email"
            placeholder="john@email.com"
            value={state.email}
            onChange={handlechange}
            errorMsg={state.errorMsg.email}
          ></TextInput>
          <TextInput
            label="Phone Number"
            name="phone"
            placeholder="+55 45 12345-6789"
            value={state.phone}
            onChange={handlechange}
            errorMsg={state.errorMsg.phone}
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
            value={state.adress}
            onChange={handlechange}
            errorMsg={state.errorMsg.adress}
          ></TextInput>
          <TextInput
            label="City"
            name="city"
            placeholder="Foz do Iguaçu"
            value={state.city}
            onChange={handlechange}
            errorMsg={state.errorMsg.city}
          ></TextInput>
          <TextInput
            label="Country"
            name="country"
            placeholder="Brazil"
            value={state.country}
            onChange={handlechange}
            errorMsg={state.errorMsg.country}
          ></TextInput>
          <TextInput
            label="Zip Code"
            name="zip"
            placeholder="12345-123"
            value={state.zip}
            onChange={handlechange}
            errorMsg={state.errorMsg.zip}
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
              active={state.paymentMethod === "e-money"}
            ></RadioInput>
            <RadioInput
              id="cash"
              label="Cash on Delivery"
              name="paymentMethod"
              value="cash"
              onChange={handlechange}
              active={state.paymentMethod === "cash"}
            ></RadioInput>
          </div>
          <TextInput
            label="e-Money Number"
            name="eNumber"
            placeholder="1234567890"
            value={state.eNumber}
            onChange={handlechange}
            errorMsg={state.errorMsg.eNumber}
          ></TextInput>
          <TextInput
            label="e-Money Pin"
            name="ePin"
            placeholder="12345"
            value={state.ePin}
            onChange={handlechange}
            errorMsg={state.errorMsg.ePin}
          ></TextInput>
        </div>
      </div>
      <CtaBtn type="submit" onClick={() => {}}>
        {`Confirm & Buy`}
      </CtaBtn>
    </form>
  );
};
