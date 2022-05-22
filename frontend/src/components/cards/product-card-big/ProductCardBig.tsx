import cardImg from "../../../assets/images/card-2.png";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";
import "./product-card-big.scss";

export const ProductCardBig = () => {
  return (
    <div className="product-card-big flex jc-sb ai-c">
      <div className="product-card-big__img flex-1 flex jc-c">
        <span className="img-background"></span>
        <img src={cardImg} alt="product" />
      </div>
      <div className="product-card-big__info flex-1">
        <h2 className="fs-l fc-reverse">Motocross Equipment</h2>
        <p className="fs-m fc-reverse">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo
          eum optio iure dicta. Commodi tenetur porro labore facere laboriosam
          placeat ullam, optio dolores sequi quisquam autem sed, repellendus ea.
          Perspiciatis, sapiente?
        </p>
        <CtaBtn
          small
          color="black"
          onClick={() => console.log("ok product button")}
        >
          See More
        </CtaBtn>
      </div>
    </div>
  );
};
