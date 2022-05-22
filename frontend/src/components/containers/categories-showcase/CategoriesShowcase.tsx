import mountainImg1 from "../../../assets/icons/mountain-bike-1.png";
import mountainImg2 from "../../../assets/icons/mountain-bike-2.png";
import campingImg1 from "../../../assets/icons/camping-1.png";
import campingImg2 from "../../../assets/icons/camping-2.png";
import offImg1 from "../../../assets/icons/off-road-1.png";
import offImg2 from "../../../assets/icons/off-road-2.png";
import xtremeImg from "../../../assets/icons/xtreme-1.png";
import utilityImg from "../../../assets/icons/utility-1.png";

import "./categories-showcase.scss";
import { CategoryCard } from "../../cards/category-card/CategoryCard";

// Mountain Bike,  Camping, Off Road, Xtreme, Utility

export const CategoriesShowcase = () => {
  return (
    <section className="categories-showcase container">
      <CategoryCard
        text="Mountain Bike"
        img={mountainImg1}
        link={"/shop/1?field=&category=Mountain+Bike"}
      ></CategoryCard>
      <CategoryCard
        text="*Mountain Climb"
        img={mountainImg2}
        link={"/shop/1?field=&category=Mountain+Bike"}
      ></CategoryCard>
      <CategoryCard
        text="Camping"
        img={campingImg1}
        link={"/shop/1?field=&category=Camping"}
      ></CategoryCard>
      <CategoryCard
        text="*Hiking"
        img={campingImg2}
        link={"/shop/1?field=&category=Camping"}
      ></CategoryCard>
      <CategoryCard
        text="Off Road"
        img={offImg1}
        link={"/shop/1?field=&category=Off+Road"}
      ></CategoryCard>
      <CategoryCard
        text="*Motocross"
        img={offImg2}
        link={"/shop/1?field=&category=Off+Road"}
      ></CategoryCard>
      <CategoryCard
        text="Xtreme"
        img={xtremeImg}
        link={"/shop/1?field=&category=Xtreme"}
      ></CategoryCard>
      <CategoryCard
        text="Utility"
        img={utilityImg}
        link={"/shop/1?field=&category=Utility"}
      ></CategoryCard>
    </section>
  );
};
