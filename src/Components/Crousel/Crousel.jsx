import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Crousel.css';
import spons from '../ExploreCard/spons.png'
import contact from '../ExploreCard/contact.png'
import speak from '../ExploreCard/speak.png'
import time from '../ExploreCard/time.png'
// import required modules
import { Pagination } from 'swiper/modules';

export default function Crousel() {
  return (

    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img src={spons} alt="sponser" className='crousimg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={contact} alt="sponser" className='crousimg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={time} alt="sponser" className='crousimg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={speak} alt="sponser" className='crousimg' />
        </SwiperSlide>
      </Swiper>
    </>

  );
}
