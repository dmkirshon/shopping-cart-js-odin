import React from "react";
import { Link } from "react-router-dom";

const NavCart = ({ cartSize }) => {
  return (
    <div className="nav-cart">
      {cartSize === 0 ? null : <p className="nav-cart-count">{cartSize}</p>}
      <Link className="nav-cart-link" to="/cart">
        🛒 Cart
      </Link>
    </div>
  );
};

export default NavCart;
