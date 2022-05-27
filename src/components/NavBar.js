import React from "react";
import { Link } from "react-router-dom";
import NavCart from "./NavCart";

const NavBar = ({ cartSize }) => {
  return (
    <nav>
      <div className="nav-logo">🔥 ShopDrop 🔥</div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <NavCart cartSize={cartSize} />
    </nav>
  );
};

export default NavBar;
