import productImg from "../../../assets/images/product-2.png";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

import "./promotion-card.scss";

export const PromotionCard = () => {
  return (
    <div className="promotion-card flex jc-sb ai-c">
      <div className="promotion-card__info flex-1">
        <h2 className="fs-l">Test asd</h2>
        <CtaBtn
          small
          color="transparent"
          onClick={() => console.log("ok promotion card")}
        >
          Test asd
        </CtaBtn>
      </div>
      <div className="promotion-card__img flex-1">
        <img src={productImg} alt="product" />
      </div>
    </div>
  );
};
