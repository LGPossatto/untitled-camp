import { NavigateFunction } from "react-router-dom";

export interface ISearch {
  field: string;
  categories: string[];
}

export const handleRadio = (
  e: React.ChangeEvent<HTMLInputElement>,
  state: ISearch,
  setState: React.Dispatch<React.SetStateAction<ISearch>>
) => {
  const value = e.target.value;
  let newCategories;

  if (state.categories.includes(value)) {
    newCategories = state.categories.filter((category) => category !== value);
  } else {
    newCategories = [...state.categories, value];
  }

  setState({ ...state, categories: newCategories });
};

export const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  search: ISearch,
  navigate: NavigateFunction
) => {
  e.preventDefault();

  navigate(`/shop/1?category=${search.categories.join(",")}`);
};
