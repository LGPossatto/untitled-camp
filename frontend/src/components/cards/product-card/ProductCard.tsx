import productImg from "../../../assets/images/product-1.png";

import "./product-card.scss";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={productImg} alt="product" />
      </div>
      <h3 className="fs-m fw-bold">Test asd</h3>
      <CtaBtn small onClick={() => console.log("ok product btn")}>
        Test Test
      </CtaBtn>
    </div>
  );
};
