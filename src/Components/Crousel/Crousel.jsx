import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import spons from '../ExploreCard/spons.png'
import contact from '../ExploreCard/contact.png'
import speak from '../ExploreCard/speak.png'
import time from '../ExploreCard/time.png'

import './Crousel.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
         <Swiper className="swip-out" 
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]} >
        <SwiperSlide className='swip-box'>
            <img src={spons} alt="sponser" className='crousimg' />
            <div className="crouss-div">
                <div className="crous-text1">Partners</div>
                <div className="crous-text2">More</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swip-box'>
        <img src={contact} alt="sponser" className='crousimg' />
        <div className="crouss-div">
                <div className="crous-text1">Contact</div>
                <div className="crous-text2">More</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swip-box'>
        <img src={time} alt="sponser" className='crousimg' />
        <div className="crouss-div">
                <div className="crous-text1">Programme</div>
                <div className="crous-text2">More</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swip-box'>
        <img src={speak} alt="sponser" className='crousimg' />
        <div className="crouss-div">
                <div className="crous-text1">Speakers</div>
                <div className="crous-text2">More</div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
