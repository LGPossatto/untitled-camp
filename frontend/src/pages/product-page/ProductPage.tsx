import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products/ProductsContext";

import "./product-page.scss";
import { Spinner } from "../../components/visual-elements/spinner/Spinner";
import { ProductShop } from "../../components/containers/product-shop/ProductShop";
import { ProductInfo } from "../../components/containers/product-info/ProductInfo";
import { ProductImgs } from "../../components/containers/product-imgs/ProductImgs";
import { ProductRec } from "../../components/containers/product-rec/ProductRec";
import { AboutUs } from "../../components/containers/about-us/AboutUs";

export const ProductPage = () => {
  const { singleProduct, getProductById } = useContext(ProductsContext);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id!);
  }, [id]);

  return (
    <div className="product-page">
      {!singleProduct ? (
        <div className="product-page__spinner flex jc-c">
          <Spinner></Spinner>
        </div>
      ) : (
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
      )}
      <div className="product-page__more">
        <ProductRec></ProductRec>
        <div>
          <AboutUs></AboutUs>
        </div>
      </div>
    </div>
  );
};
