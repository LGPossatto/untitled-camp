import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { handleRadio, handleSubmit, ISearch } from "./utils";

import "./search-form.scss";
import { ImgBtn } from "../../buttons/img-btn/ImgBtn";
import { RadioInput } from "../../inputs/radio-input/RadioInput";
import { TextInput } from "../../inputs/text-input/TextInput";

export const SearchForm = () => {
  const [search, setSearch] = useState<ISearch>({ field: "", categories: [] });
  const navigate = useNavigate();

  return (
    <form
      className="search-form"
      onSubmit={(e) => handleSubmit(e, search, navigate)}
    >
      <div className="flex">
        <div className="flex-1">
          <TextInput
            placeholder="Search (try 'sociis')"
            name="search"
            onChange={(e) => {
              setSearch({ ...search, field: e.target.value });
            }}
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
      <div className="search-form__cat flex ai-c flex-fw-w">
        <RadioInput
          id="Mountain+Bike"
          label="Mountain Bike"
          name="Mountain+Bike"
          value="Mountain+Bike"
          onChange={(e) => {
            handleRadio(e, search, setSearch);
          }}
          active={search.categories.includes("Mountain+Bike")}
        ></RadioInput>
        <RadioInput
          id="Camping"
          label="Camping"
          name="Camping"
          value="Camping"
          onChange={(e) => {
            handleRadio(e, search, setSearch);
          }}
          active={search.categories.includes("Camping")}
        ></RadioInput>
        <RadioInput
          id="Off+Road"
          label="Off-Road"
          name="Off+Road"
          value="Off+Road"
          onChange={(e) => {
            handleRadio(e, search, setSearch);
          }}
          active={search.categories.includes("Off+Road")}
        ></RadioInput>
        <RadioInput
          id="Xtreme"
          label="Xtreme"
          name="Xtreme"
          value="Xtreme"
          onChange={(e) => {
            handleRadio(e, search, setSearch);
          }}
          active={search.categories.includes("Xtreme")}
        ></RadioInput>
        <RadioInput
          id="Utility"
          label="Utility"
          name="Utility"
          value="Utility"
          onChange={(e) => {
            handleRadio(e, search, setSearch);
          }}
          active={search.categories.includes("Utility")}
        ></RadioInput>
      </div>
    </form>
  );
};
