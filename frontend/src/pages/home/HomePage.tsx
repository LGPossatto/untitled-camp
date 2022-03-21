import "./home-page.scss";
import { Hero } from "../../components/containers/hero/Hero";
import { ProductsShowcase } from "../../components/containers/products-showcase/ProductsShowcase";
import { ProductCardBig } from "../../components/cards/product-card-big/ProductCardBig";
import { PromotionCard } from "../../components/cards/promotion-card/PromotionCard";
import { ImgCard } from "../../components/cards/img-card/ImgCard";
import { AboutUs } from "../../components/containers/about-us/AboutUs";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero></Hero>
      <div className="home-page__products">
        <h2 className="fs-xl">Last Promotions</h2>
        <ProductsShowcase></ProductsShowcase>
      </div>
      <section className="home-page__cards">
        <ProductCardBig></ProductCardBig>
        <PromotionCard></PromotionCard>
        <ImgCard></ImgCard>
      </section>
      <div className="home-page__about">
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};
