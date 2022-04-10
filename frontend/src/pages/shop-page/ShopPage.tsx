import "./shop-page.scss";
import { ProductCard } from "../../components/cards/product-card/ProductCard";

export const ShopPage = () => {
  return (
    <div className="shop-page container">
      <div className="shop-page__adj">
        <input type="text" className="" />
        more
      </div>
      <div className="shop-page__products">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};
