import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductDetails from "./components/ProductDetails";

import "./App.css";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartSize={shoppingCart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={<ShoppingCart cartSize={shoppingCart.length} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
