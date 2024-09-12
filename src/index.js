import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./CartContext"; // Import CartProvider

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
