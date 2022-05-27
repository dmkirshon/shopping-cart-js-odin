import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const ShoppingCart = ({ cartProducts }) => {
  const isCartEmpty = () => {
    return cartProducts.length === 0;
  };

  const shoppingCartEmptyMessage = () => {
    return (
      <p className="shopping-cart-empty">
        Shopping cart is empty! Add{" "}
        <Link to="/products">ShopDrop products</Link> to checkout!
      </p>
    );
  };

  const ProductsInCart = () => {
    return (
      <div className="shopping-cart-products">
        {cartProducts.map((product) => {
          return (
            <CartProduct
              key={product.id}
              productID={product.id}
              productCount={product.count}
            />
          );
        })}
      </div>
    );
  };

  const TotalPriceCart = () => {
    return <div className="shopping-cart-total">Total Cart: $</div>;
  };

  return (
    <div className="shopping-cart">
      {isCartEmpty() && shoppingCartEmptyMessage()}
      <ProductsInCart />
      <TotalPriceCart />
    </div>
  );
};

export default ShoppingCart;
