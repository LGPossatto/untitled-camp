import { Link, useLocation, useParams } from "react-router-dom";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./pagination.scss";
import { IconLink } from "../links/icon-link/IconLink";

interface props {
  num: string | number;
}

export const Pagination = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div className="pagination flex ai-c jc-c">
      <IconLink
        color="fc-normal"
        href={`/shop/${id === "1" ? "1" : parseInt(id!) - 1}${location.search}`}
        icon={faAngleLeft}
      ></IconLink>
      {[1, 2, 3, 4, 5].map((num) => (
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
        href={`/shop/${id === "5" ? "5" : parseInt(id!) + 1}${location.search}`}
        icon={faAngleRight}
      ></IconLink>
    </div>
  );
};
