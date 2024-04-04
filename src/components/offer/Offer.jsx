import React from 'react';
import './offer.css';
import { offer } from '../../Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Offer = () => {
  return (
    <section className="offer section" id='offer'>
<h2 className="section__title" data-title='Offer'>
Special Offer for you
</h2>

<Swiper
spaceBetween={30}
 pagination={{clickable:true}} modules={[Pagination]} 
className="container">
{offer.map(({img,title,description,discount},index) => {
    return(
     <SwiperSlide className='offer__item' key={index}>
     <div className="offer__img-wrapper">
         <img src={img} className='offer__img' alt="" />
         {/* Photo by <a href="https://unsplash.com/@johnophoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">jonathan ocampo</a> on <a href="https://unsplash.com/photos/cheese-bread-tQdIW-GbRig?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
  
     </div>

     <div className="offer__content">
         <div className="offer__title">{title}</div>
         <span className="offer__discount">{discount}</span>
         <p className="offer__description">{description}</p>
         <a href="/" className="btn">Order Now</a>

     </div>
 </SwiperSlide>
 );
})}
      </Swiper>

</section>
  )
}

export default Offer
