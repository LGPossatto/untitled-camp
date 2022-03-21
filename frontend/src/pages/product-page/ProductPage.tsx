import "./product-page.scss";
import { ProductShop } from "../../components/containers/product-shop/ProductShop";
import { ProductInfo } from "../../components/containers/product-info/ProductInfo";
import { ProductImgs } from "../../components/containers/product-imgs/ProductImgs";
import { ProductRec } from "../../components/containers/product-rec/ProductRec";
import { AboutUs } from "../../components/containers/about-us/AboutUs";

export const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-page__info">
        <div>
          <ProductShop></ProductShop>
        </div>
        <div>
          <ProductInfo></ProductInfo>
        </div>
        <div>
          <ProductImgs></ProductImgs>
        </div>
      </div>
      <div className="product-page__more">
        <ProductRec></ProductRec>
        <div>
          <AboutUs></AboutUs>
        </div>
      </div>
    </div>
  );
};
