import { useContext, useEffect } from "react";

import { ProductsContext } from "../../../context/products/ProductsContext";

import "./products-showcase.scss";
import { ProductCard } from "../../cards/product-card/ProductCard";
import { Spinner } from "../../visual-elements/spinner/Spinner";

export const ProductsShowcase = () => {
  const { randomProducts, getRandomlProducts } = useContext(ProductsContext);

  useEffect(() => {
    getRandomlProducts(9);
  }, []);

  return (
    <section className="products-showcase flex ai-c">
      {randomProducts.length > 0 ? (
        randomProducts.map((product, i) => (
          <ProductCard key={i} product={product} stock={false}></ProductCard>
        ))
      ) : (
        <div className="products-showcase__spinner flex jc-c">
          <Spinner></Spinner>
        </div>
      )}
    </section>
  );
};
