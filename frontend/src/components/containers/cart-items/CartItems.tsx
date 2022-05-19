import { useContext } from "react";

import { UserContext } from "../../../context/user/UserContext";

import productImg from "../../../assets/images/product-1.png";

import "./cart-items.scss";
import { CartItem } from "../../cards/cart-item/CartItem";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const CartItems = () => {
  const { cart } = useContext(UserContext);

  return (
    <section className="cart-items">
      <h3 className="fs-l">Summary</h3>
      <div className="cart-items__products">
        {cart.map((item) => (
          <CartItem product={item.product} quant={item.quant}></CartItem>
        ))}
      </div>
      <div className="cart-items__sums">
        <p className="fs-m fc-gray-dark">
          Total <span className="fs-m fc-normal fw-bold">$ ????.??</span>
        </p>
        <p className="fs-m fc-gray-dark">
          Shipping <span className="fs-m fc-normal fw-bold">$ ????.??</span>
        </p>
        <p className="fs-m fc-gray-dark">
          VAT (included){" "}
          <span className="fs-m fc-normal fw-bold">$ ????.??</span>
        </p>
        <p className="fs-m fc-gray-dark">
          Grand Total{" "}
          <span className="fs-m fc-normal fc-accent fw-bold">$ ????.??</span>
        </p>
      </div>
      <CtaBtn onClick={() => {}}>{"Continue to Checkout"}</CtaBtn>
    </section>
  );
};
