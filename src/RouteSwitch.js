import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

const RouteSwitch = () => {
  return (
    <div className="router">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
