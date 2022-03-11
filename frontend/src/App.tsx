import { Nav } from "./components/basics/nav/Nav";
import { Hero } from "./components/basics/hero/Hero";
import { Footer } from "./components/basics/footer/Footer";
import { ProductsShowcase } from "./components/containers/products-showcase/ProductsShowcase";
import { ProductCardBig } from "./components/cards/product-card-big/ProductCardBig";
import { PromotionCard } from "./components/cards/promotion-card/PromotionCard";
import { ImgCard } from "./components/cards/img-card/ImgCard";

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <Hero></Hero>
      <ProductsShowcase></ProductsShowcase>
      <div className="container">
        <ProductCardBig></ProductCardBig>
        <PromotionCard></PromotionCard>
        <ImgCard></ImgCard>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
