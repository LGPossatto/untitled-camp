import { Nav } from "./components/basics/nav/Nav";
import { Hero } from "./components/basics/hero/Hero";
import { Footer } from "./components/basics/footer/Footer";
import { ProductsShowcase } from "./components/containers/products-showcase/ProductsShowcase";

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <Hero></Hero>
      <ProductsShowcase></ProductsShowcase>
      <Footer></Footer>
    </div>
  );
}

export default App;
