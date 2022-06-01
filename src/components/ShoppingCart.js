import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const ShoppingCart = ({ cartProducts, updateShoppingCart }) => {
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

  const productsInCart = () => {
    return (
      <div className="shopping-cart-products">
        {cartProducts.map((product) => {
          return (
            <CartProduct
              key={product.id}
              productID={product.id}
              productToCartCount={product.count}
              updateShoppingCart={updateShoppingCart}
            />
          );
        })}
      </div>
    );
  };

  const totalPriceCart = () => {
    return <div className="shopping-cart-total">Total Cart: $</div>;
  };

  return (
    <div className="shopping-cart">
      {isCartEmpty() && shoppingCartEmptyMessage()}
      {productsInCart()}
      {totalPriceCart()}
    </div>
  );
};

export default ShoppingCart;
