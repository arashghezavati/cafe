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
            Quality-driven, niche, and unapologetic.
          </h2>

          <p className="about__description">
            At Angus T bakery, all of our pastries are hand-crafted in our
            Yaletown kitchen daily, using the freshest quality ingredients
            sourced from both France and Vancouver. While we focus on
            traditional methods and take no short-cuts in our process, we are
            unafraid to push creativity boundaries in flavours and textures.
          </p>

          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck />
              small, family-owned business{" "}
            </p>
            <p>
              <FiCheck />
              committment to using the highest quality ingredients
            </p>
            <p>
              <FiCheck /> passionate about our craft and our community
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
