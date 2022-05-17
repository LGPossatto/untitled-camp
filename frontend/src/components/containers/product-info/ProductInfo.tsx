import { useContext } from "react";

import { ProductsContext } from "../../../context/products/ProductsContext";

import "./product-info.scss";

const data = {
  fetures: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo vel harum ipsam cumque? Aspernatur ab libero tenetur aliquam quos nemo cumque. Libero earum quasi eius ipsam animi adipisci cum? Sapiente dolores earum reprehenderit, modi molestias, est tempore ullam, assumenda eos neque ipsum commodi dolor numquam! Earum similique blanditiis quod consequuntur debitis dolores! Saepe tempora, mollitia qui itaque labore est!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet sint cum aut, eligendi odit autem, est voluptatibus laudantium expedita commodi, possimus a ut temporibus. Blanditiis quia fuga nostrum qui.",
  ],
  content: [
    { name: "Lorem ipsum dolor", quant: 1 },
    { name: "Sit amet consectetur", quant: 2 },
    { name: "Adipisicing elit", quant: 1 },
    { name: "Et exercitationem", quant: 3 },
    { name: "Accusamus", quant: 1 },
    { name: "Suscipit expedita vero", quant: 1 },
  ],
};

export const ProductInfo = () => {
  const { singleProduct } = useContext(ProductsContext);
  const { fetures, content } = singleProduct!;
  const cont = content.split(". ");

  return (
    <section className="product-info container flex jc-sb">
      <div className="product-info__features">
        <h2 className="fs-l">Fetures</h2>
        {fetures.map((paragraph, i) => (
          <p key={i} className="fs-m">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="product-info__content">
        <h2 className="fs-l">In The Box</h2>
        {cont.map((paragraph, i) => (
          <p key={i} className="p fs-m fc-accent fw-bold">
            {i}x
            <span className="fs-m">
              {paragraph}
              {i < cont.length - 1 ? ";" : ""}
            </span>
          </p>
        ))}
      </div>
    </section>
  );
};
