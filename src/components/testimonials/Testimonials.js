import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVTR1,
    name:'Shivam Nayak',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis rem commodi deleniti fugit asperiores officiis assumenda repudiandae temporibus praesentium vitae sit accusantium itaque eos, consequuntur quod accusamus consectetur. Reprehenderit! ',
  },
  {
    avatar: AVTR2,
    name:'Shivam Nayak',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis rem commodi deleniti fugit asperiores officiis assumenda repudiandae temporibus praesentium vitae sit accusantium itaque eos, consequuntur quod accusamus consectetur. Reprehenderit! ',
  },
  {
    avatar: AVTR3,
    name:'Shivam Nayak',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis rem commodi deleniti fugit asperiores officiis assumenda repudiandae temporibus praesentium vitae sit accusantium itaque eos, consequuntur quod accusamus consectetur. Reprehenderit! ',
  },
  {
    avatar: AVTR4,
    name:'Shivam Nayak',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis rem commodi deleniti fugit asperiores officiis assumenda repudiandae temporibus praesentium vitae sit accusantium itaque eos, consequuntur quod accusamus consectetur. Reprehenderit! ',
  },
  {
    avatar: AVTR1,
    name:'Shivam Nayak',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis rem commodi deleniti fugit asperiores officiis assumenda repudiandae temporibus praesentium vitae sit accusantium itaque eos, consequuntur quod accusamus consectetur. Reprehenderit! ',
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container mySwiper" 
       pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      >
        {
          data.map(({avatar, name, review}, index) =>{
            return(
          <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
          </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
