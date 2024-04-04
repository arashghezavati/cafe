import React from "react";
import "./team.css";
import baker1 from "../../assets/228620296_699930301427757_1764771574891832360_n.jpg";
import baker2 from "../../assets/228620296_699930301427757_1764771574891832360_n.jpg";
import baker3 from "../../assets/228620296_699930301427757_1764771574891832360_n.jpg";
import baker4 from "../../assets/228620296_699930301427757_1764771574891832360_n.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Team = () => {
  return (
    <section className="team section" id="team">
      <h2 className="section__title" data-title="bakers">
        Meet our Bakers
      </h2>

      <div className="team__grid grid container">
        <div className="team__item">
          <img src={baker1} alt="" className="team__img" />

          <div className="team__data">
            <h3 className="team__title">Lorem, ipsum.</h3>
            <p className="team__job">Senior Baker</p>
          </div>

          <div className="team__socials">
            <a href="" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team__item">
          <img src={baker2} alt="" className="team__img" />

          <div className="team__data">
            <h3 className="team__title">Lorem, ipsum.</h3>
            <p className="team__job">Senior Baker</p>
          </div>

          <div className="team__socials">
            <a href="" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team__item">
          <img src={baker3} alt="" className="team__img" />

          <div className="team__data">
            <h3 className="team__title">Lorem, ipsum.</h3>
            <p className="team__job">Senior Baker</p>
          </div>

          <div className="team__socials">
            <a href="" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team__item">
          <img src={baker4} alt="" className="team__img" />

          <div className="team__data">
            <h3 className="team__title">Lorem, ipsum.</h3>
            <p className="team__job">Senior Baker</p>
          </div>

          <div className="team__socials">
            <a href="" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
