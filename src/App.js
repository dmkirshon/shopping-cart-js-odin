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
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToShoppingCart = (id, count, cost) => {
    setShoppingCart((prevCart) => {
      const cartEmpty = prevCart.length === 0;
      const productNotInCart =
        prevCart.filter((cartProduct) => cartProduct.id === id).length === 0;

      if (cartEmpty) {
        return [{ id, count, cost }];
      } else if (productNotInCart) {
        return [...prevCart, { id, count, cost }];
      } else {
        return prevCart.map((cartProduct) => {
          if (cartProduct.id === id) {
            return {
              id,
              count: cartProduct.count + count,
              cost: cartProduct.cost,
            };
          }
          return {
            id: cartProduct.id,
            count: cartProduct.count,
            cost: cartProduct.cost,
          };
        });
      }
    });
  };

  const updateShoppingCart = (id, newCount, cost) => {
    setShoppingCart((prevCart) => {
      return prevCart.map((cartProduct) => {
        if (cartProduct.id === id) {
          return { id, count: newCount, cost };
        }
        return {
          id: cartProduct.id,
          count: cartProduct.count,
          cost: cartProduct.cost,
        };
      });
    });
  };

  const deleteFromShoppingCart = () => {};

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          cartSize={shoppingCart.reduce(
            (totalProducts, product) => totalProducts + product.count,
            0
          )}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetails addToShoppingCart={addToShoppingCart} />}
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartProducts={shoppingCart}
                updateShoppingCart={updateShoppingCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
