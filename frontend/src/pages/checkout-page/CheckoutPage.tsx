import "./checkout-page.scss";
import { Checkout } from "../../components/containers/checkout/Checkout";
import { TextLink } from "../../components/links/text-link/TextLink";

export const CheckoutPage = () => {
  return (
    <div className="checkout-page container">
      <TextLink link="/" text="Go Back"></TextLink>
      <Checkout></Checkout>
    </div>
  );
};
