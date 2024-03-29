import { useNavigate } from "react-router-dom";

import productImg from "../../../assets/images/product-card-1.png";

import "./promotion-card.scss";

export const PromotionCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="promotion-card flex jc-sb ai-c"
      onClick={() => {
        navigate("/shop/1");
      }}
    >
      <div className="promotion-card__info flex-1">
        <h2 className="fs-l">Big Bicycle Promotions</h2>
        <p className="fs-sm fc-gray-dark">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aut
          repellat ratione saepe architecto ad aliquam accusantium nam mollitia
          eligendi.
        </p>
      </div>
      <div className="promotion-card__img flex-1">
        <img src={productImg} alt="product" />
      </div>
    </div>
  );
};
