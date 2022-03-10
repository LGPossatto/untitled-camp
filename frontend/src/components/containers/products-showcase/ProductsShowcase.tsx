import { ProductCard } from "../../cards/product-card/ProductCard";
import "./products-showcase.scss";

export const ProductsShowcase = () => {
  return (
    <section className="products-showcase flex jc-se ai-c">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </section>
  );
};
