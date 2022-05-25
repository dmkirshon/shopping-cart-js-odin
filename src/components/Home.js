import React from "react";
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          cupiditate maxime. Qui impedit inventore, voluptatibus quidem nihil
          iste maxime, eveniet possimus, perferendis est veritatis adipisci
          repellat reiciendis. Atque, exercitationem nihil.
        </p>
      </div>
      <button className="home-shop-button">Shop Now!</button>
    </div>
  );
};

export default Home;
