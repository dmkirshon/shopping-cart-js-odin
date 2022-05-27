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
  const [shoppingCart, setShoppingCart] = useState([
    { id: 1, count: 2 },
    { id: 2, count: 2 },
    { id: 3, count: 2 },
    { id: 4, count: 2 },
  ]);

  const addToShoppingCart = () => {};
  const deleteFromShoppingCart = () => {};

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
            element={<ShoppingCart cartProducts={shoppingCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
