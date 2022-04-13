import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserContext } from "./context/user/UserContext";

import "./assets/styles/app.scss";
import { Nav } from "./components/basics/nav/Nav";
import { Footer } from "./components/basics/footer/Footer";

import { LoginPage } from "./pages/login-page/LoginPage";
import { SignupPage } from "./pages/signup-page/SignupPage";
import { ProfilePage } from "./pages/profile-page/ProfilePage";

import { ErrorPage } from "./pages/error-page/ErrorPage";
import { AboutPage } from "./pages/about-page/AboutPage";

import { HomePage } from "./pages/home-page/HomePage";
import { ShopPage } from "./pages/shop-page/ShopPage";
import { ProductPage } from "./pages/product-page/ProductPage";

import { CheckoutPage } from "./pages/checkout-page/CheckoutPage";
import { CartPage } from "./pages/cart-page/CartPage";

function App() {
  const { user, cart, getLocalUser } = useContext(UserContext);

  useEffect(() => {
    getLocalUser();
  }, []);

  return (
    <main className="app flex flex-fd-c">
      <Nav></Nav>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>

          <Route
            path="/login"
            element={
              user ? <Navigate to="/"></Navigate> : <LoginPage></LoginPage>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              user ? <Navigate to="/"></Navigate> : <SignupPage></SignupPage>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              user ? <ProfilePage></ProfilePage> : <Navigate to="/"></Navigate>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              user ? <CartPage></CartPage> : <Navigate to="/login"></Navigate>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              user && cart.length > 0 ? (
                <CheckoutPage></CheckoutPage>
              ) : (
                <Navigate to="/cart"></Navigate>
              )
            }
          ></Route>
          <Route path="/shop/:id" element={<ShopPage></ShopPage>}></Route>
          <Route
            path="/products/:id"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
