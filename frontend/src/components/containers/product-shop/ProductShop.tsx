import { Link } from "react-router-dom";

import productImg from "../../../assets/images/placeholder-1.jpg";

import "./product-shop.scss";
import { CountBtn } from "../../buttons/count-btn/CountBtn";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";
import { Tag } from "../../visual-elements/tag/Tag";

export const ProductShop = () => {
  return (
    <section className="product-shop container">
      <Link to="/" className="fs-sm fc-gray-dark">
        Go Back
      </Link>
      <div className="flex jc-sb ai-c">
        <div className="product-shop__img flex-1">
          <img src={productImg} alt="product" />
        </div>
        <div className="product-shop__info flex-1">
          <Tag text="Test Tag asd" fontSize="fs-sm" />
          <h2 className="fs-l">Test asd</h2>
          <p className="fs-m">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            nisi. Voluptate tempora eaque nam repellendus incidunt neque sint,
            accusamus omnis illum optio deleniti porro, iste earum! Libero alias
            possimus rem.
          </p>
          <p className="price fs-m fw-bold ">$ 1.200,00</p>
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
