import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserContext } from "./context/user/UserContext";

import "./assets/styles/app.scss";
import { Nav } from "./components/basics/nav/Nav";
import { Footer } from "./components/basics/footer/Footer";

import { LoginPage } from "./pages/login-page/LoginPage";
import { SignupPage } from "./pages/signup-page/SignupPage";
import { ProfilePage } from "./pages/profile-page/ProfilePage";

import { HomePage } from "./pages/home-page/HomePage";
import { ShopPage } from "./pages/shop-page/ShopPage";
import { ProductPage } from "./pages/product-page/ProductPage";

import { CheckoutPage } from "./pages/checkout-page/CheckoutPage";
import { CartPage } from "./pages/cart-page/CartPage";

function App() {
  const { user } = useContext(UserContext);

  return (
    <main className="app flex flex-fd-c">
      <Nav></Nav>
      <div className="flex-1">
        <Routes>
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

          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route path="/shop/:id" element={<ShopPage></ShopPage>}></Route>
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
