import { CartItems } from "../../components/containers/cart-items/CartItems";
import { TextLink } from "../../components/links/text-link/TextLink";

import "./cart-page.scss";

export const CartPage = () => {
  return (
    <div className="cart-page container">
      <TextLink link="/" text="Go Back"></TextLink>
      <CartItems></CartItems>
    </div>
  );
};
