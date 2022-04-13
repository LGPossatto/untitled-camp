import { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { ProductsContext } from "../../context/products/ProductsContext";

import "./shop-page.scss";
import { SearchForm } from "../../components/containers/search-form/SearchForm";
import { Spinner } from "../../components/visual-elements/spinner/Spinner";
import { ProductCard } from "../../components/cards/product-card/ProductCard";
import { Pagination } from "../../components/pagination/Pagination";

export const ShopPage = () => {
  const { pageProducts, getProducts, searchProducts } =
    useContext(ProductsContext);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      searchProducts(id!, location.search);
    } else {
      getProducts(id!);
    }
  }, [id, location.search]);

  return (
    <div className="shop-page container">
      <SearchForm></SearchForm>
      {!pageProducts[id!] ? (
        <div className="flex jc-c">
          <Spinner></Spinner>
        </div>
      ) : (
        <>
          <div className="shop-page__products">
            {pageProducts[id!] &&
              pageProducts[id!].map((product, i) => (
                <ProductCard key={i} product={product}></ProductCard>
              ))}
          </div>
        </>
      )}
      <Pagination></Pagination>
    </div>
  );
};
