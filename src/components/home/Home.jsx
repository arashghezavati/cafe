import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__content">
          <spna className="home__subtitle">Welcome to Bakery Cafe</spna>
          <h1 className="home__title">
            Freshly Baked Croissants <br /> with Love
          </h1>
          <p className="home__description">
            Enjoy daily-baked, flavorful croissants in a cozy cafe ambiance—your
            go-to spot for authentic, handcrafted indulgence.
          </p>

          <div className="home__btns">
            <a href="#menu" className="btn">
              Check Menu
            </a>
            <a href="#reservation" className="btn home__btn">
              Book Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
