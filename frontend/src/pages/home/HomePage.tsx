import "./home-page.scss";
import { Hero } from "../../components/containers/hero/Hero";
import { ProductCardBig } from "../../components/cards/product-card-big/ProductCardBig";
import { PromotionCard } from "../../components/cards/promotion-card/PromotionCard";
import { ImgCard } from "../../components/cards/img-card/ImgCard";
import { CategoriesShowcase } from "../../components/containers/categories-showcase/CategoriesShowcase";
import { ProductsShowcase } from "../../components/containers/products-showcase/ProductsShowcase";
import { AboutUs } from "../../components/containers/about-us/AboutUs";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero></Hero>
      <section className="home-page__cards">
        <ProductCardBig></ProductCardBig>
        <PromotionCard></PromotionCard>
        <ImgCard></ImgCard>
      </section>
      <div className="home-page__categories">
        <h2 className="fs-xl">Categories</h2>
        <CategoriesShowcase></CategoriesShowcase>
      </div>
      <div className="home-page__products">
        <h2 className="fs-xl">Last Promotions</h2>
        <ProductsShowcase></ProductsShowcase>
      </div>
      <div className="home-page__about">
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};
