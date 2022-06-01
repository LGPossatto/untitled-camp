import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductsContext } from "../../../context/products/ProductsContext";
import { UserContext } from "../../../context/user/UserContext";

import { productsImgs } from "../../../assets/utils/productsImgs";

import "./product-shop.scss";
import { CountBtn } from "../../buttons/count-btn/CountBtn";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";
import { Tag } from "../../visual-elements/tag/Tag";
import { TextLink } from "../../links/text-link/TextLink";

export const ProductShop = () => {
  const { singleProduct } = useContext(ProductsContext);
  const { user, addToCart } = useContext(UserContext);
  const [quant, setQuant] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();

  const { image, desc, name, price, tag } = singleProduct!;

  const handleClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      addToCart(id!, quant, singleProduct!);
    }
  };

  return (
    <section className="product-shop container">
      <TextLink link="/" text="Go Back"></TextLink>
      <div className="flex jc-sb ai-c">
        <div className="product-shop__img flex-1">
          <img src={productsImgs[parseInt(image)]} alt="product" />
        </div>
        <div className="product-shop__info flex-1">
          <Tag text={tag} fontSize="fs-sm" />
          <h2 className="fs-l">{name}</h2>
          <p className="fs-m">{desc}</p>
          <p className="price fs-m fw-bold ">$ {price.toFixed(2)}</p>
          <div className="info-btns flex ai-c">
            <CountBtn quant={quant} setQuant={setQuant}></CountBtn>
            <CtaBtn small onClick={handleClick}>
              Add to Cart
            </CtaBtn>
          </div>
        </div>
      </div>
    </section>
  );
};
