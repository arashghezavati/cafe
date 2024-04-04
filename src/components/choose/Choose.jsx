import React from "react";
import "./choose.css";
import chooseImg from "../../assets/mae-mu-m9pzwmxm2rk-unsplash.jpg";
import coffeeMug from "../../assets/eve-maier-jfMCgNandXk-unsplash.jpg";
import coffeeBeans2 from "../../assets/eve-maier-jfMCgNandXk-unsplash.jpg";
import coffeeBeans3 from "../../assets/eve-maier-jfMCgNandXk-unsplash.jpg";

const Choose = () => {
  return (
    <section className="choose section">
      <div className="choose__grid container grid">
        <div className="choose__content">
          <h2 className="section__title title-left" data-title="Why Choose Us">
            The Best Croissant you have ever experienced
          </h2>

          <p className="choose__description">
            Our croissant bakery is the perfect place to enjoy a delicious
            croissant and a cup of coffee. We offer a wide variety of flavors
            and are dedicated to artisanal craftsmanship.
          </p>

          <div className="choose__details grid">
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeMug} alt="" className="choose__details-img" />
              </div>

              <div>
                <h3 className="choose__details-title">Artisanal Craftsmanship
                </h3>
                <p className="choose__details-description">
                    new flavors and are dedicated to artisanal craftsmanship.
                </p>
              </div>
            </div>

            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img
                  src={coffeeBeans2}
                  alt=""
                  className="choose__details-img"
                />
              </div>

              <div>
                <h3 className="choose__details-title">
                    Wide Variety of Flavors
                </h3>
                <p className="choose__details-description">
                    We offer a wide variety of flavors and are dedicated to
                    artisanal craftsmanship.
                </p>
              </div>
            </div>

            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img
                  src={coffeeBeans3}
                  alt=""
                  className="choose__details-img"
                />
              </div>

              <div>
                <h3 className="choose__details-title">
                    Delicious Croissants
                </h3>
                <p className="choose__details-description">
                    croissant and a cup of coffee. We offer a wide variety of flavors and are dedicated to artisanal craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={chooseImg} alt="" className="choose__img" />
        {/*Photo by <a href="https://unsplash.com/@picoftasty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mae Mu</a> on <a href="https://unsplash.com/photos/two-brown-croissants-m9pzwmxm2rk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
         */}
      </div>
    </section>
  );
};

export default Choose;
