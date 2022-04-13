import { useContext, useEffect } from "react";

import { ProductsContext } from "../../../context/products/ProductsContext";

import { ProductCard } from "../../cards/product-card/ProductCard";
import "./products-showcase.scss";

export const ProductsShowcase = () => {
  const { randomProducts, getRandomlProducts } = useContext(ProductsContext);

  useEffect(() => {
    getRandomlProducts(9);
  }, []);

  return (
    <section className="products-showcase flex ai-c">
      {randomProducts.length >= 9 &&
        randomProducts.map((product, i) => (
          <ProductCard key={i} product={product} stock={false}></ProductCard>
        ))}
    </section>
  );
};
