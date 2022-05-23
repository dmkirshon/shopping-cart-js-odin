import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">Store Name</div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">🛒</Link>
    </nav>
  );
};

export default NavBar;
