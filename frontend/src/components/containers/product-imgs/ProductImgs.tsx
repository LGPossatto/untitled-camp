import productImg1 from "../../../assets/images/placeholder-1.jpg";
import productImg2 from "../../../assets/images/placeholder-2.jpg";
import productImg3 from "../../../assets/images/placeholder-3.jpg";

import "./product-imgs.scss";

export const ProductImgs = () => {
  return (
    <section className="product-imgs container">
      <div className="product-imgs__img grid-1">
        <img src={productImg1} alt="product" />
      </div>
      <div className="product-imgs__img grid-2">
        <img src={productImg2} alt="product" />
      </div>
      <div className="product-imgs__img grid-3">
        <img src={productImg3} alt="product" />
      </div>
    </section>
  );
};
