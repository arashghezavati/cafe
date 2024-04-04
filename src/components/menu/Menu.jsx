import React from 'react';
import './menu.css';
import { menu } from '../../Data';

const Menu = () => {
  return (
    <section className="menu section" id="menu">
        <h2 className="section__title" data-title='Menu'>
            Let's Check Our Menu
            </h2>

            <div className="menu__grid container grid">

                {menu.map(({img,title,description,price},index)=>{
                    return(
                        <div className="menu__item grid" key={index}>
                            <div className="menu__img-wrapper">
                                <img src={img} alt="" className="menu__img"/>
                             {/* Photo by <a href="https://unsplash.com/@picoftasty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mae Mu</a> on <a href="https://unsplash.com/photos/two-brown-croissants-m9pzwmxm2rk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>  */}
  
                                </div>
                                <div className="menu__data">
                                    <div>
                                        <h3 className="menu__title">{title}</h3>
                                            <p className="menu__description">{description}</p>
                                    </div>
                                        <span className="menu__price">{price}</span>
                                     
                               

                            </div>
                        </div>
                    )
                })}

            </div>
    </section>
  )
}

export default Menu
