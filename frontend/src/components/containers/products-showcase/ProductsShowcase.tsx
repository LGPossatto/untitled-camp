import { ProductCard } from "../../cards/product-card/ProductCard";
import "./products-showcase.scss";

export const ProductsShowcase = () => {
  return (
    <section className="products-showcase flex ai-c">
      <ProductCard stock={false}></ProductCard>
      <ProductCard stock={false}></ProductCard>
      <ProductCard stock={false}></ProductCard>
      <ProductCard stock={false}></ProductCard>
      <ProductCard stock={false}></ProductCard>
      <ProductCard stock={false}></ProductCard>
      <ProductCard stock={false}></ProductCard>
      <ProductCard stock={false}></ProductCard>
      <ProductCard stock={false}></ProductCard>
    </section>
  );
};
