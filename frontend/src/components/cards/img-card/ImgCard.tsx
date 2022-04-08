import cardImg from "../../../assets/images/placeholder-2.jpg";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

import "./img-card.scss";

export const ImgCard = () => {
  return (
    <div className="img-card flex ai-c">
      <div className="img-card__img">
        <img src={cardImg} alt="product" />
      </div>
      <div className="img-card__info">
        <h2 className="fs-l">Test asd</h2>
        <CtaBtn
          small
          color="transparent"
          onClick={() => console.log("ok promotion card")}
        >
          Test asd
        </CtaBtn>
      </div>
    </div>
  );
};
