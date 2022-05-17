import { useNavigate } from "react-router-dom";

import { Iproduct } from "../../../context/products/ProductsContext";

import "./product-card.scss";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

interface props {
  product: Iproduct;
  stock?: boolean;
}

export const ProductCard = ({ product, stock = true }: props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={`product-card ${stock ? "product-card-stock" : ""}`}>
      <div className="product-card__img">
        <img
          src={`/src/assets/images/product-${product.image}.png`}
          alt="product"
        />
      </div>
      <h3 className="fs-m fw-bold">{product.name}</h3>
      <span className="fs-m fc-gray-dark fw-bold">
        $ {product.price.toFixed(2)}
      </span>
      <p className="fs-sm fc-gray-dark">{product.desc}</p>
      <CtaBtn small onClick={handleClick}>
        More
      </CtaBtn>
    </div>
  );
};
