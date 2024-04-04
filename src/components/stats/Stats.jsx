import React from 'react';
import './stats.css';
import coffeShop from '../../assets/coffee-shop.svg';
// import experience from '../../assets/experience.svg';
import coffeCup from '../../assets/coffee-cup.svg';
import chef from '../../assets/chef.svg';

const Stats = () => {
  return (
    <section className="stats section">
        <div className="stats__grid container grid">
            <div className='stats__item'>
                <div className="stats__img-wrapper">
                    <img src={coffeShop} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">20</p>
                    <h3 className="stats__title">Total Branches</h3>
                </div>
            </div>

            <div className='stats__item'>
                <div className="stats__img-wrapper">
                    <img src={coffeCup} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">1000</p>
                    <h3 className="stats__title">Happy Customers</h3>
                </div>
            </div>

            <div className='stats__item'>
                <div className="stats__img-wrapper">
                    <img src={chef} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">18</p>
                    <h3 className="stats__title">+Professional Bakers</h3>
                </div>
            </div>

            <div className='stats__item'>
                <div className="stats__img-wrapper">
                    <img src={chef} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">10</p>
                    <h3 className="stats__title">+ years of Experience</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats
