import React, { useEffect, useState } from "react";

const CartProduct = ({
  productID,
  productToCartCount,
  updateShoppingCart,
  productToCartCost,
}) => {
  const [product, setProduct] = useState({});
  const [productCount, setProductCount] = useState(productToCartCount);
  const [productCost, setProductCost] = useState(productToCartCost);

  useEffect(() => {
    updateShoppingCart(productID, productCount, productCost);
  }, [productCount]);

  const handleProductCountChange = (event) => {
    const newCount = Number(event.target.value);
    setProductCount(newCount > 1 ? newCount : 1);
    setProductCost(newCount > 1 ? newCount * product.price : product.price);
  };

  // Used productCount for cost due to rounding errors of cost calculations
  const handleDecrementProductCount = () => {
    setProductCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    setProductCost((prevCost) =>
      productCount > 1 ? prevCost - product.price : product.price
    );
  };

  const handleIncrementProductCount = () => {
    setProductCount((prevCount) => prevCount + 1);
    setProductCost((prevCost) => prevCost + product.price);
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
    return <p>Product Total: ${productCost.toFixed(2)}</p>;
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
