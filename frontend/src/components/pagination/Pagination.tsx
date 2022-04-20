import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { ProductsContext } from "../../context/products/ProductsContext";
import { removeSymbols } from "../../assets/utils/removeSymbols";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./pagination.scss";
import { IconLink } from "../links/icon-link/IconLink";

export const Pagination = () => {
  const { id } = useParams();
  const location = useLocation();
  const { categoryProducts, pageProducts } = useContext(ProductsContext);

  const checkProducts = (id: number) => {
    if (location.search.length > 10) {
      return (
        categoryProducts[removeSymbols(location.search)] &&
        categoryProducts[removeSymbols(location.search)][id] &&
        categoryProducts[removeSymbols(location.search)][id].length >= 8
      );
    }

    return pageProducts[id] && pageProducts[id].length >= 8;
  };

  const getPag = () => {
    const pag: number[] = [];
    const nId = parseInt(id!);

    if (nId > 1) {
      pag.push(nId - 1);
    }

    pag.push(nId);

    if (checkProducts(nId)) {
      pag.push(nId + 1);
    }

    return pag;
  };

  return (
    <div className="pagination flex ai-c jc-c">
      <IconLink
        color="fc-normal"
        href={`/shop/${id === "1" ? "1" : parseInt(id!) - 1}${location.search}`}
        icon={faAngleLeft}
      ></IconLink>
      {getPag().map((num) => (
        <Link
          to={`/shop/${num}${location.search}`}
          key={num}
          className={`fs-m fw-bold ${parseInt(id!) === num ? "fc-accent" : ""}`}
        >
          {num}
        </Link>
      ))}
      <IconLink
        color="fc-normal"
        href={`/shop/${!checkProducts(parseInt(id!)) ? id : parseInt(id!) + 1}${
          location.search
        }`}
        icon={faAngleRight}
      ></IconLink>
    </div>
  );
};
