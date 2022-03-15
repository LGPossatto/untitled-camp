import productImg from "../../../assets/images/placeholder-1.jpg";

import "./product-imgs.scss";

export const ProductImgs = () => {
  return (
    <section className="product-imgs container">
      <div className="product-imgs__img grid-1">
        <img src={productImg} alt="product" />
      </div>
      <div className="product-imgs__img grid-2">
        <img src={productImg} alt="product" />
      </div>
      <div className="product-imgs__img grid-3">
        <img src={productImg} alt="product" />
      </div>
    </section>
  );
};
