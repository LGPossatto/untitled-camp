import { Route, Routes } from "react-router-dom";

import { Nav } from "./components/basics/nav/Nav";
import { Footer } from "./components/basics/footer/Footer";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout-page/CheckoutPage";
import { ProductPage } from "./pages/product-page/ProductPage";
import { CartPage } from "./pages/cart-page/CartPage";

function App() {
  return (
    <main>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route
          path="/products/:id"
          element={<ProductPage></ProductPage>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </main>
  );
}

export default App;
