import { Link } from "react-router-dom";

import "./category-card.scss";
import { Arrow } from "../../visual-elements/arrow/Arrow";

interface props {
  text: string;
  img: string;
  link: string;
}

export const CategoryCard = ({ text, img, link }: props) => {
  return (
    <Link to={link} className="category-card">
      <div className="category-card__img">
        <img src={img} alt="category" />
      </div>
      <h3 className="fs-m fw-bold">
        {text} <Arrow fontSize="fs-m"></Arrow>
      </h3>
    </Link>
  );
};
