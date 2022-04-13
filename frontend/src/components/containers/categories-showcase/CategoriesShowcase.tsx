import categoryImg from "../../../assets/images/product-1.png";

import "./categories-showcase.scss";
import { CategoryCard } from "../../cards/category-card/CategoryCard";

// Mountain Bike,  Camping, Off Road, Xtreme, Utility

export const CategoriesShowcase = () => {
  return (
    <section className="categories-showcase container">
      <CategoryCard
        text="Mountain Bike"
        img={categoryImg}
        link="/"
      ></CategoryCard>
      <CategoryCard text="Camping" img={categoryImg} link="/"></CategoryCard>
      <CategoryCard text="Off Road" img={categoryImg} link="/"></CategoryCard>
      <CategoryCard text="Xtreme" img={categoryImg} link="/"></CategoryCard>
      <CategoryCard text="Utility" img={categoryImg} link="/"></CategoryCard>
      <CategoryCard
        text="*Mountain Bike"
        img={categoryImg}
        link="/"
      ></CategoryCard>
      <CategoryCard text="*Camping" img={categoryImg} link="/"></CategoryCard>
      <CategoryCard text="*Off Road" img={categoryImg} link="/"></CategoryCard>
    </section>
  );
};
