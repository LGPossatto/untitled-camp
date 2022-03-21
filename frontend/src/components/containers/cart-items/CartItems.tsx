import productImg from "../../../assets/images/product-1.png";

import "./cart-items.scss";
import { CartItem } from "../../cards/cart-item/CartItem";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const CartItems = () => {
  return (
    <section className="cart-items">
      <h3 className="fs-l">Summary</h3>
      <div className="cart-items__products">
        <CartItem
          img={productImg}
          name="test asd"
          price={1299}
          quant={4}
        ></CartItem>
        <CartItem
          img={productImg}
          name="test fgh"
          price={128}
          quant={2}
        ></CartItem>
        <CartItem
          img={productImg}
          name="test jkl"
          price={19}
          quant={1}
        ></CartItem>
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
