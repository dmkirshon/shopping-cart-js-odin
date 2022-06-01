import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const ShoppingCart = ({
  cartProducts,
  updateShoppingCart,
  deleteFromShoppingCart,
}) => {
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
              productToCartCost={product.cost}
              updateShoppingCart={updateShoppingCart}
              deleteFromShoppingCart={deleteFromShoppingCart}
            />
          );
        })}
      </div>
    );
  };

  const totalPriceCart = () => {
    let total = 0;
    const totalPrice = cartProducts.reduce(
      (total, product) => Number(total) + Number(product.cost),
      total
    );
    return (
      <div className="shopping-cart-total">
        Total Cart: ${Number(totalPrice).toFixed(2)}
      </div>
    );
  };

  const checkoutButton = () => {
    return <button className="shopping-cart-checkout-button">Check Out</button>;
  };

  return (
    <div className="shopping-cart">
      {isCartEmpty() && shoppingCartEmptyMessage()}
      {productsInCart()}
      {!isCartEmpty() && (
        <div className="shopping-cart-checkout">
          {totalPriceCart()}
          {checkoutButton()}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
