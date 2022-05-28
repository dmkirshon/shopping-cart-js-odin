import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ updateShoppingCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    price: 0,
    rating: {},
  });
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    fetchProductDetails().catch(console.error);
  }, []);

  const fetchProductDetails = async () => {
    const fetchProduct = await fetch(`https://fakestoreapi.com/products/${id}`);
    const productDetails = await fetchProduct.json();

    setProduct(productDetails);
    console.log(productDetails);
  };

  const handleProductCountChange = (event) => {
    setProductCount(Number(event.target.value));
  };

  const handleAddToCart = () => {
    updateShoppingCart(id, productCount);
    setProductCount(1);
  };

  const handleDecrementProductCount = () => {
    setProductCount((prevCount) => (prevCount !== 1 ? prevCount - 1 : 1));
  };

  const handleIncrementProductCount = () => {
    setProductCount((prevCount) => prevCount + 1);
  };

  const productSummary = () => {
    return (
      <div className="product-summary">
        <p className="product-summary-description">
          Description: {product.description}
        </p>
        <p className="product-summary-price">${product.price.toFixed(2)}</p>
        <p className="product-summary-rating">
          {product.rating.rate} ⭐️ ({product.rating.count} reviews)
        </p>
      </div>
    );
  };

  const productPurchase = () => {
    return (
      <div className="product-purchase">
        <button
          className="product-quantity-decrement"
          onClick={handleDecrementProductCount}
        >
          ➖
        </button>
        <input
          type="Number"
          className="product-amount"
          value={productCount}
          min="1"
          onChange={handleProductCountChange}
        ></input>
        <button
          className="product-quantity-increment"
          onClick={handleIncrementProductCount}
        >
          ➕
        </button>
        <button className="product-buy-submit" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    );
  };

  return (
    <div className="product">
      <h2 className="product-title">{product.title}</h2>
      <div className="product-details">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-info">
          {productSummary()}
          {productPurchase()}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
