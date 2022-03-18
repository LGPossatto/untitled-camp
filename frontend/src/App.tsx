import { useState, useEffect } from "react";

import { Nav } from "./components/basics/nav/Nav";
import { Hero } from "./components/containers/hero/Hero";
import { Footer } from "./components/basics/footer/Footer";
import { ProductsShowcase } from "./components/containers/products-showcase/ProductsShowcase";
import { ProductCardBig } from "./components/cards/product-card-big/ProductCardBig";
import { PromotionCard } from "./components/cards/promotion-card/PromotionCard";
import { ImgCard } from "./components/cards/img-card/ImgCard";
import { AboutUs } from "./components/containers/about-us/AboutUs";
import { ProductShop } from "./components/containers/product-shop/ProductShop";
import { ProductInfo } from "./components/containers/product-info/ProductInfo";
import { ProductImgs } from "./components/containers/product-imgs/ProductImgs";
import { ProductRec } from "./components/containers/product-rec/ProductRec";
import { TextInput } from "./components/inputs/text-input/TextInput";
import { RadioInput } from "./components/inputs/radio-input/RadioInput";
import { Checkout } from "./components/containers/checkout/Checkout";
import CartItems from "./components/containers/cart-items/CartItems";

function App() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    color: "",
  });

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });

    console.log(value);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

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
      <AboutUs></AboutUs>
      <ProductShop></ProductShop>
      <ProductInfo></ProductInfo>
      <ProductImgs></ProductImgs>
      <ProductRec></ProductRec>
      <TextInput
        label="Name"
        placeholder="adasdsadsadadasd"
        errorMsg=""
        name="name"
        value={value.name}
        onChange={handlechange}
      ></TextInput>
      <TextInput
        label="Email"
        placeholder="adasdsadsadadasd"
        errorMsg="asd asdasdsad asdas d dsd dadas"
        name="email"
        value={value.email}
        onChange={handlechange}
      ></TextInput>
      <RadioInput
        active={value.color === "blue"}
        id="blue"
        label="blue"
        name="color"
        value="blue"
        onChange={handlechange}
      ></RadioInput>
      <RadioInput
        active={value.color === "red"}
        id="red"
        label="red"
        name="color"
        value="red"
        onChange={handlechange}
      ></RadioInput>
      <Checkout></Checkout>
      <CartItems></CartItems>
      <Footer></Footer>
    </div>
  );
}

export default App;
