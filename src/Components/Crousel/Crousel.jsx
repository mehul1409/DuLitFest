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
// import { Pagination } from 'swiper/modules';
import { EffectCube, Pagination, Autoplay , Navigation } from 'swiper/modules';


export default function Crousel() {
  return (

    <>
      <Swiper className="swip-out" 
      pagination={true}
    
      modules={[Pagination]} >
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
