import { CategoryCard } from "../../cards/category-card/CategoryCard";
import "./categories-showcase.scss";

export const CategoriesShowcase = () => {
  return (
    <section className="categories-showcase container">
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
    </section>
  );
};
