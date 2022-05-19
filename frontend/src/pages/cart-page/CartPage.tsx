import { useContext } from "react";

import { UserContext } from "../../context/user/UserContext";

import { CartItems } from "../../components/containers/cart-items/CartItems";
import { TextLink } from "../../components/links/text-link/TextLink";

import "./cart-page.scss";

export const CartPage = () => {
  const { cart } = useContext(UserContext);

  return (
    <div className="cart-page container">
      <TextLink link="/" text="Go Back"></TextLink>
      {cart.length < 1 ? "asd" : <CartItems></CartItems>}
    </div>
  );
};
