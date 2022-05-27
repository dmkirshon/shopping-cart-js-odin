import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cartSize }) => {
  const shoppingCartEmptyMessage = () => {
    return (
      <p className="shopping-cart-empty">
        Shopping cart is empty! Add{" "}
        <Link to="/products">ShopDrop products</Link> to checkout!
      </p>
    );
  };

  return (
    <div className="shopping-cart">
      {cartSize === 0 ? shoppingCartEmptyMessage() : null}
    </div>
  );
};

export default ShoppingCart;
