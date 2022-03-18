import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { CountBtn } from "../../buttons/count-btn/CountBtn";
import { ImgBtn } from "../../buttons/img-btn/ImgBtn";
import "./cart-item.scss";

interface props {
  img: string;
  name: string;
  price: number;
  quant: number;
}

export const CartItem = ({ img, name, price, quant }: props) => {
  return (
    <div className="cart-item flex jc-sb ai-c">
      <div className="flex ai-c">
        <div className="cart-item__img">
          <img src={img} alt="product" />
        </div>
        <div className="cart-item__name-price">
          <h4 className="fs-m">{name}</h4>
          <span className="fs-m fc-gray-dark fw-bold">$ {price}</span>
        </div>
      </div>
      <div className="cart-item__btns flex ai-c">
        <CountBtn></CountBtn>
        <ImgBtn
          img={faTrash}
          onClick={() => console.log("ok cart item trash")}
        ></ImgBtn>
      </div>
    </div>
  );
};
