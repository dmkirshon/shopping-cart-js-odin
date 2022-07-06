import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ addToShoppingCart }) => {
  const { id } = useParams();

  const [pageLoaded, setPageLoaded] = useState(false);

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
    setPageLoaded(true);
  };

  const handleProductCountChange = (event) => {
    setProductCount(Number(event.target.value));
  };

  const handleAddToCart = () => {
    addToShoppingCart(id, productCount, productCount * product.price);
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
          <strong>Description:</strong> {product.description}
        </p>
        <div className="product-summary-values">
          <p className="product-summary-price">
            Price: ${product.price.toFixed(2)}
          </p>
          <p className="product-summary-rating">
            {product.rating.rate} ⭐️ ({product.rating.count} reviews)
          </p>
        </div>
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
      {!pageLoaded ? (
        <div className="loading">
          <span>Loading</span>
        </div>
      ) : (
        <div className="product-main">
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
      )}
    </div>
  );
};

export default ProductDetails;
