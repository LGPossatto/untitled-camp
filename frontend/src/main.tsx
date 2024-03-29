import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ProductsProvider } from "./context/products/ProductsProvider";
import { UserProvider } from "./context/user/UserProvider";

import "./assets/styles/globals.scss";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
