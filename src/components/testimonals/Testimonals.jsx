import React from 'react';
import './testimonals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { testimonials } from '../../Data';
import { FaStar } from 'react-icons/fa';
import {VscTriangleDown} from 'react-icons/vsc';


const Testimonals = () => {
  return (
  <section className="testimonals container section" id="testimonals">
    <h2 className="section__title" data-title='Testimonals'>
            What Clients Say About Us
            </h2>

            <Swiper
spaceBetween={30}
 pagination={{clickable:true}}
 breakpoints={{

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }} modules={[Pagination]} 
>
{testimonials.map(({img,title,service,description},index) => {
    return(
     <SwiperSlide className='testimonials__item' key={index}>
    
<div className="testimonial__quote">
    <p className="testimonial__description">
        {description}
    </p>
    <VscTriangleDown className='testimonial__icon' />
</div>
<div className="testimonial__content">
    <div className="testimonial__img-wrapper">
        <img src={img} alt="" className="testimonial__img" />
    </div>
</div>
<h3 className="testimonial__title">{title}</h3>
<p className="testimonial__service">{service}</p>

<div className="testimonial__rating">
    <FaStar/>
    <FaStar/>
    <FaStar/>
    <FaStar/>
    <FaStar/>
</div>
 </SwiperSlide>
 );
})}
      </Swiper>
  </section>
  )
}

export default Testimonals
