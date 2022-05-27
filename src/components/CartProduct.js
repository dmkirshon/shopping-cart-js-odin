import React, { useEffect, useState } from "react";

const CartProduct = ({ productID, productCount }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProductDetails().catch(console.error);
  }, []);

  const fetchProductDetails = async () => {
    const fetchProduct = await fetch(
      `https://fakestoreapi.com/products/${productID}`
    );
    const productDetails = await fetchProduct.json();

    setProduct(productDetails);
    console.log(productDetails);
  };

  const ProductCount = () => {
    return (
      <div>
        <button className="cart-product-count-decrement">➖</button>
        <input className="cart-product-count-input"></input>
        <button className="cart-product-count-increment">➕</button>
      </div>
    );
  };
  const ProductTotal = () => {
    const totalCost = product.price * productCount;
    return <p>Product Total: ${totalCost.toFixed(2)}</p>;
  };

  const RemoveProduct = () => {
    return <button>Remove</button>;
  };

  return (
    <div className="cart-product">
      <img
        className="cart-product-image"
        src={product.image}
        alt={product.title}
      />
      <div className="cart-product-info">
        <p className="cart-product-title">{product.title}</p>
        <div className="cart-product-info-amount">
          <ProductCount />
          <ProductTotal />
          <RemoveProduct />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
