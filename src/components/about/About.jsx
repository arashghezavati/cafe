import React from "react";
import "./about.css";
import aboutImg from "../../assets/eve-maier-jfMCgNandXk-unsplash.jpg";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="" className="about__img" />
        </div>

        {/* Photo by <a href="https://unsplash.com/@maierfoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eve Maier</a> on <a href="https://unsplash.com/photos/bread-on-brown-wooden-tray-jfMCgNandXk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}

        <div className="about__content">
          <h2 className="section__title" data-title="About Us">
            Best Quality, Best Taste and Best Service.
          </h2>

          <p className="about__description">
            At our bakery we provide the best quality breads, pastries with the best taste and service.
          </p>

          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck />
              small and lovely bakery
            </p>
            <p>
              <FiCheck />
              committment to using the highest quality ingredients
            </p>
            <p>
              <FiCheck /> passionate about baking
            </p>
          </div>

          <a href="#team" className="btn">
            Our Bakers
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
