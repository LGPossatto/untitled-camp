import productImg from "../../../assets/images/product-1.png";

import "./product-card.scss";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

interface props {
  stock?: boolean;
}

export const ProductCard = ({ stock = true }: props) => {
  return (
    <div className={`product-card ${stock ? "product-card-stock" : ""}`}>
      <div className="product-card__img">
        <img src={productImg} alt="product" />
      </div>
      <h3 className="fs-m fw-bold">Test asd</h3>
      <span className="fs-m fc-gray-dark fw-bold">$ 1299.99</span>
      <p className="fs-sm fc-gray-dark">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor corrupti
        suscipit optio labore expedita eligendi ex itaque! Sint sequi accusamus,
        nam at inventore minima tenetur, eaque omnis libero porro facere!
      </p>
      <CtaBtn small onClick={() => console.log("ok product btn")}>
        Test Test
      </CtaBtn>
    </div>
  );
};
