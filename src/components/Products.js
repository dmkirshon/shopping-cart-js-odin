import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsFetch = await fetch("https://fakestoreapi.com/products");
      const productsData = await productsFetch.json();

      setProducts(productsData);
      console.log(productsData);
    };
    fetchProducts().catch(console.error);
  }, []);

  const displayProducts = () => {
    return products.map((productInfo) => {
      return (
        <div key={productInfo.id}>
          <img className="products-image" src={productInfo.image} />
          <p>{productInfo.title}</p>
          <p>{productInfo.rating.rate} ⭐️</p>
        </div>
      );
    });
  };

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="products-main">{displayProducts()}</div>
    </div>
  );
};

export default Products;
