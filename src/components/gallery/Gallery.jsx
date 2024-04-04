import React from 'react';
import { gallery } from '../../Data';
import {BsPlusLg} from 'react-icons/bs';
import './gallery.css';
const Gallery = () => {
  return (
    <section className="gallery section" id="gallery">
        <h2 className="section__title" data-title='Gallery'>
Gallery Photoes</h2>
        

        <div className="gallery__grid container grid">
            {gallery.map(({img,title},index)=>{
return(
    <div className="gallery__item" key={index}>
        <img src={img} alt="" className="gallery__img" />
        {/* Photo by <a href="https://unsplash.com/@picoftasty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mae Mu</a> on <a href="https://unsplash.com/photos/two-brown-croissants-m9pzwmxm2rk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
  

        <a href="/" className="gallery__icon">
        <BsPlusLg />
        </a>

        <h3 className="gallery__title">{title}</h3>
    </div>
)
            })}
        </div>
    </section>
  )
}

export default Gallery
