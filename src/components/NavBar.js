import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">🔥 ShopDrop 🔥</div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">🛒 Cart</Link>
    </nav>
  );
};

export default NavBar;
