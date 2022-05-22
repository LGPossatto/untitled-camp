import { useContext } from "react";

import { ISingleProduct } from "../../../context/products/ProductsContext";
import { UserContext } from "../../../context/user/UserContext";

import { productsImgs } from "../../../assets/utils/productsImgs";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./cart-item.scss";
import { CountBtn } from "../../buttons/count-btn/CountBtn";
import { ImgBtn } from "../../buttons/img-btn/ImgBtn";

interface props {
  product: ISingleProduct;
  quant: number;
}

export const CartItem = ({ product, quant }: props) => {
  const { addToCart, removeFromCart } = useContext(UserContext);
  const { _id: id, name, image, price } = product;

  const onClickPlus = () => {
    addToCart(id, 1, product);
  };

  const onClickMinus = () => {
    removeFromCart(id, 1, product);
  };

  const onClickDelete = () => {
    removeFromCart(id, quant, product);
  };

  return (
    <div className="cart-item flex jc-sb ai-c">
      <div className="flex ai-c">
        <div className="cart-item__img">
          <img src={productsImgs[parseInt(image)]} alt="product" />
        </div>
        <div className="cart-item__name-price">
          <h4 className="fs-m">{name}</h4>
          <span className="fs-m fc-gray-dark fw-bold">$ {price}</span>
        </div>
      </div>
      <div className="cart-item__btns flex ai-c">
        <CountBtn
          quant={quant}
          onClickMinus={onClickMinus}
          onClickPlus={onClickPlus}
        ></CountBtn>
        <ImgBtn img={faTrash} onClick={onClickDelete}></ImgBtn>
      </div>
    </div>
  );
};
