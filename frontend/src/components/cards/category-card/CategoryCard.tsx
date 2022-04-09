import categoryImg from "../../../assets/images/product-1.png";

import "./category-card.scss";
import { Arrow } from "../../visual-elements/arrow/Arrow";

export const CategoryCard = () => {
  return (
    <div className="category-card">
      <div className="category-card__img">
        <img src={categoryImg} alt="category" />
      </div>
      <h3 className="fs-m fw-bold">
        Test asd <Arrow fontSize="fs-m"></Arrow>
      </h3>
    </div>
  );
};
