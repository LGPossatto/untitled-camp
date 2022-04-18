import { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { removeSymbols } from "../../assets/utils/removeSymbols";
import { ProductsContext } from "../../context/products/ProductsContext";

import "./shop-page.scss";
import { SearchForm } from "../../components/containers/search-form/SearchForm";
import { Spinner } from "../../components/visual-elements/spinner/Spinner";
import { ProductCard } from "../../components/cards/product-card/ProductCard";
import { Pagination } from "../../components/pagination/Pagination";

export const ShopPage = () => {
  const { pageProducts, categoryProducts, getProducts, searchProducts } =
    useContext(ProductsContext);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.search && location.search.length > 10) {
      searchProducts(id!, location.search);
    } else {
      getProducts(id!);
    }
  }, [id, location.search]);

  const checkCat = (id: string) => {
    if (location.search && location.search.length > 10) {
      if (!categoryProducts[removeSymbols(location.search)]) return [];
      return categoryProducts[removeSymbols(location.search)][id];
    } else {
      return pageProducts[id];
    }
  };

  return (
    <div className="shop-page container">
      <SearchForm></SearchForm>
      {!checkCat(id!) ? (
        <div className="flex jc-c">
          <Spinner></Spinner>
        </div>
      ) : (
        <>
          <div className="shop-page__products">
            {checkCat(id!) &&
              checkCat(id!).map((product, i) => (
                <ProductCard key={i} product={product}></ProductCard>
              ))}
          </div>
        </>
      )}
      <Pagination></Pagination>
    </div>
  );
};
