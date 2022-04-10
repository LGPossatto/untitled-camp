import { useParams } from "react-router-dom";
import {
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./shop-page.scss";
import { ProductCard } from "../../components/cards/product-card/ProductCard";
import { IconLink } from "../../components/links/icon-link/IconLink";
import { TextInput } from "../../components/inputs/text-input/TextInput";
import { useState } from "react";
import { ImgBtn } from "../../components/buttons/img-btn/ImgBtn";
import { RadioInput } from "../../components/inputs/radio-input/RadioInput";

export const ShopPage = () => {
  const [search, setSearch] = useState<{ field: string; categories: string[] }>(
    { field: "", categories: [] }
  );
  const { id } = useParams();

  const handleTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let newCategories;

    if (search.categories.includes(value)) {
      newCategories = search.categories.filter(
        (category) => category !== value
      );
    } else {
      newCategories = [...search.categories, value];
    }

    setSearch({ ...search, categories: newCategories });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("ok shop search");
  };

  return (
    <div className="shop-page container">
      <form className="shop-page__adj" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flex-1">
            <TextInput
              placeholder="Search"
              name="search"
              onChange={handleTxt}
              value={search.field}
            />
          </div>
          <ImgBtn
            color="fc-reverse"
            background="normal"
            img={faMagnifyingGlass}
            onClick={() => {}}
          ></ImgBtn>
        </div>
        <div className="shop-page__cat flex ai-c flex-fw-w">
          <RadioInput
            id="test"
            label="Test"
            name="test"
            value="test"
            onChange={handleRadio}
            active={search.categories.includes("test")}
          ></RadioInput>
          <RadioInput
            id="test2"
            label="Test2"
            name="test2"
            value="test2"
            onChange={handleRadio}
            active={search.categories.includes("test2")}
          ></RadioInput>
          <RadioInput
            id="test3"
            label="Test3"
            name="test3"
            value="test3"
            onChange={handleRadio}
            active={search.categories.includes("test3")}
          ></RadioInput>
          <RadioInput
            id="test4"
            label="Test4"
            name="test4"
            value="test4"
            onChange={handleRadio}
            active={search.categories.includes("test4")}
          ></RadioInput>
          <RadioInput
            id="tes5"
            label="Tes5"
            name="tes5"
            value="tes5"
            onChange={handleRadio}
            active={search.categories.includes("tes5")}
          ></RadioInput>
          <RadioInput
            id="test6"
            label="Test6"
            name="test6"
            value="test6"
            onChange={handleRadio}
            active={search.categories.includes("test6")}
          ></RadioInput>
        </div>
      </form>
      <div className="shop-page__products">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <div className="shop-page__pag flex ai-c jc-c">
        <IconLink color="fc-normal" href="/" icon={faAngleLeft}></IconLink>
        {[0, 1, 2, 3, 4].map((num) => (
          <span
            className={`fs-m fw-bold ${
              parseInt(id!) === num ? "fc-accent" : ""
            }`}
          >
            {num}
          </span>
        ))}
        <IconLink color="fc-normal" href="/" icon={faAngleRight}></IconLink>
      </div>
    </div>
  );
};
