import { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { removeSymbols } from "../../assets/utils/removeSymbols";
import { ProductsContext } from "../../context/products/ProductsContext";

import "./shop-page.scss";
import { SearchForm } from "../../components/containers/search-form/SearchForm";
import { Spinner } from "../../components/visual-elements/spinner/Spinner";
import { ProductCard } from "../../components/cards/product-card/ProductCard";
import { Pagination } from "../../components/pagination/Pagination";
import { EmptyPage } from "../empty-page/EmptyPage";

export const ShopPage = () => {
  const {
    pageProducts,
    categoryProducts,
    fieldProducts,
    getProducts,
    searchProducts,
  } = useContext(ProductsContext);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.search && location.search.length > 17) {
      searchProducts(id!, location.search);
    } else {
      getProducts(id!);
    }
  }, [id, location.search]);

  const checkCat = (id: string) => {
    const field = location.search.split("&")[0].split("=")[1];

    if (location.search && location.search.length > 17 && !field) {
      const catagories = location.search.split("&")[1];

      if (!categoryProducts[removeSymbols(catagories)]) return [];
      return categoryProducts[removeSymbols(catagories)][id];
    } else if (field.length > 0) {
      if (!fieldProducts) return [];
      return fieldProducts[id];
    } else {
      return pageProducts[id];
    }
  };

  if (checkCat(id!) && checkCat(id!).length < 1) {
    return <EmptyPage></EmptyPage>;
  }

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
