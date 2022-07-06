import React from "react";
import { Link } from "react-router-dom";
import shoppingImage from "../assets/shoppingImage.svg";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="home-main">
        {/* Image by <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3060480">mohamed Hassan</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3060480">Pixabay</a> */}
        <img
          src={shoppingImage}
          alt="Man with megaphone shouting sale!"
          className="home-image"
        />
        <span>
          <h2>Welcome to 🔥ShopDrop🔥, home to all your shopping needs!</h2>
          <br></br>
          <p>
            Check out our variety of products and leave happy knowing your
            purchase will be handled with speed.
          </p>
        </span>
      </div>
      <Link className="home-shop-link" to="/products">
        Shop Now!
      </Link>
    </div>
  );
};

export default Home;
