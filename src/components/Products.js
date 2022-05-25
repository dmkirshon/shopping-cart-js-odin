import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    fetchProducts().catch(console.error);
  }, []);

  const fetchProducts = async () => {
    const productsFetch = await fetch("https://fakestoreapi.com/products");
    const productsData = await productsFetch.json();

    setProducts(productsData);
    setPageLoaded(true);
  };

  const displayProducts = () => {
    return products.map((productInfo) => {
      return (
        <div key={productInfo.id} className="products-selection">
          <Link to={`/products/${productInfo.id}`}>
            <img
              className="products-image"
              src={productInfo.image}
              alt={productInfo.title}
            />
          </Link>
          <div className="products-information">
            <p className="products-title">{productInfo.title}</p>
            <p className="products-rating">{productInfo.rating.rate} ⭐️</p>
          </div>
        </div>
      );
    });
  };

  const renderProducts = displayProducts();

  return (
    <div className="products">
      <h1>Products</h1>
      {!pageLoaded ? (
        <div className="loading-products">
          <span>Loading</span>
        </div>
      ) : (
        <div className="products-main">{renderProducts}</div>
      )}
    </div>
  );
};

export default Products;
