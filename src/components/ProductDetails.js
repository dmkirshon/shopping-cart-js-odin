import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    price: 0,
    rating: {},
  });

  useEffect(() => {
    fetchProductDetails().catch(console.error);
  }, []);

  const fetchProductDetails = async () => {
    const fetchProduct = await fetch(`https://fakestoreapi.com/products/${id}`);
    const productDetails = await fetchProduct.json();

    setProduct(productDetails);
    console.log(productDetails);
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
        <button className="product-quantity-increase">-</button>
        <input
          type="Number"
          className="product-amount"
          placeholder="1"
          min="0"
        ></input>
        <button className="product-quantity-decrease">+</button>
        <button className="product-buy-submit">Add to Cart</button>
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
