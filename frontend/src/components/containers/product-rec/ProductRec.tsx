import "./product-rec.scss";
import { ProductsShowcase } from "../products-showcase/ProductsShowcase";

export const ProductRec = () => {
  return (
    <section className="product-rec container">
      <h2 className="fs-xl">You May Also Like</h2>
      <div className="">
        <ProductsShowcase></ProductsShowcase>
        <ProductsShowcase></ProductsShowcase>
      </div>
    </section>
  );
};
