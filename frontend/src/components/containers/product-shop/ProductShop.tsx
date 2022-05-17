import { useContext } from "react";

import { ProductsContext } from "../../../context/products/ProductsContext";

import "./product-shop.scss";
import { CountBtn } from "../../buttons/count-btn/CountBtn";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";
import { Tag } from "../../visual-elements/tag/Tag";
import { TextLink } from "../../links/text-link/TextLink";

export const ProductShop = () => {
  const { singleProduct } = useContext(ProductsContext);
  const { image, desc, name, price, tag } = singleProduct!;

  return (
    <section className="product-shop container">
      <TextLink link="/" text="Go Back"></TextLink>
      <div className="flex jc-sb ai-c">
        <div className="product-shop__img flex-1">
          <img src={`/src/assets/images/product-${image}.png`} alt="product" />
        </div>
        <div className="product-shop__info flex-1">
          <Tag text={tag} fontSize="fs-sm" />
          <h2 className="fs-l">{name}</h2>
          <p className="fs-m">{desc}</p>
          <p className="price fs-m fw-bold ">$ {price}</p>
          <div className="info-btns flex ai-c">
            <CountBtn></CountBtn>
            <CtaBtn small onClick={() => console.log("ok product shop")}>
              test asd
            </CtaBtn>
          </div>
        </div>
      </div>
    </section>
  );
};
