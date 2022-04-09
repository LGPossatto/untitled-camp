import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ProductsContext } from "./context/products/ProductsContext";

import "./assets/styles/app.scss";
import { Nav } from "./components/basics/nav/Nav";
import { Footer } from "./components/basics/footer/Footer";

import { LoginPage } from "./pages/login-page/LoginPage";
import { SignupPage } from "./pages/signup-page/SignupPage";

import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout-page/CheckoutPage";
import { ProductPage } from "./pages/product-page/ProductPage";
import { CartPage } from "./pages/cart-page/CartPage";

function App() {
  const { getInitialProducts } = useContext(ProductsContext);

  useEffect(() => {
    getInitialProducts();
  }, []);

  return (
    <main className="app flex flex-fd-c">
      <Nav></Nav>
      <div className="flex-1">
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signin" element={<SignupPage></SignupPage>}></Route>

          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route
            path="/products/:id"
            element={<ProductPage></ProductPage>}
          ></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
