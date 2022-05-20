import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../../context/user/UserContext";

import "./cart-items.scss";
import { CartItem } from "../../cards/cart-item/CartItem";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const CartItems = () => {
  const { cart } = useContext(UserContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(
      cart.reduce((prev, item) => prev + item.quant * item.product.price, 0)
    );
  }, [cart]);

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
          Total <span className="fs-m fc-normal fw-bold">$ {total}</span>
        </p>
        <p className="fs-m fc-gray-dark">
          Shipping{" "}
          <span className="fs-m fc-normal fw-bold fc-success">Free</span>
        </p>
        <p className="fs-m fc-gray-dark">
          VAT (included){" "}
          <span className="fs-m fc-normal fw-bold fc-success">Free</span>
        </p>
        <p className="fs-m fc-gray-dark">
          Grand Total{" "}
          <span className="fs-m fc-normal fc-accent fw-bold">$ {total}</span>
        </p>
      </div>
      <CtaBtn
        onClick={() => {
          navigate("/checkout");
        }}
      >
        {"Continue to Checkout"}
      </CtaBtn>
    </section>
  );
};
