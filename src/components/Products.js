import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsFetch = await fetch("https://fakestoreapi.com/products");
      const productsData = await productsFetch.json();

      setProducts(productsData);
    };
    fetchProducts().catch(console.error);
  }, []);

  const displayProducts = () => {
    return products.map((productInfo) => {
      return (
        <div key={productInfo.id} className="products-selection">
          <img
            className="products-image"
            src={productInfo.image}
            alt={productInfo.title}
          />
          <div className="products-information">
            <p className="products-description">{productInfo.title}</p>
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
      <div className="products-main">{renderProducts}</div>
    </div>
  );
};

export default Products;
