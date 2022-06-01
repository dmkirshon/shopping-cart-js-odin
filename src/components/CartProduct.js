import React, { useEffect, useState } from "react";

const CartProduct = ({ productID, productToCartCount, updateShoppingCart }) => {
  const [product, setProduct] = useState({});

  const [productCount, setProductCount] = useState(productToCartCount);

  useEffect(() => {
    updateShoppingCart(productID, productCount);
  }, [productCount]);

  const handleProductCountChange = (event) => {
    const newCount = Number(event.target.value);
    setProductCount(newCount >= 1 ? newCount : 1);
  };

  const handleDecrementProductCount = () => {
    setProductCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleIncrementProductCount = () => {
    setProductCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    fetchProductDetails().catch(console.error);
  }, []);

  const fetchProductDetails = async () => {
    const fetchProduct = await fetch(
      `https://fakestoreapi.com/products/${productID}`
    );
    const productDetails = await fetchProduct.json();

    setProduct(productDetails);
  };

  const productCartInput = () => {
    return (
      <div>
        <button
          className="cart-product-count-decrement"
          onClick={handleDecrementProductCount}
        >
          ➖
        </button>
        <input
          className="cart-product-count-input"
          value={productCount}
          onChange={handleProductCountChange}
        ></input>
        <button
          className="cart-product-count-increment"
          onClick={handleIncrementProductCount}
        >
          ➕
        </button>
      </div>
    );
  };
  const productTotal = () => {
    const totalCost = product.price * productCount;
    return <p>Product Total: ${totalCost.toFixed(2)}</p>;
  };

  const removeProduct = () => {
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
          {productCartInput()}
          {productTotal()}
          {removeProduct()}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
