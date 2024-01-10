import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import spons from "/assets/images/explorePartners1.png";
import register from "/assets/images/exploreRegister1.png";
import speak from "/assets/images/exploreSpeaker1.png";
import time from "/assets/images/exploreProgramme1.png";

import "./Crousel.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Swiper
        className="swip-out"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="swip-box">
          <Link to="/sponsers">
            <img src={spons} alt="sponser" className="crousimg" />
            <div className="crouss-div">
              <div className="crous-text1">Partners</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swip-box">
          <Link to="/register">
            <img src={register} alt="sponser" className="crousimg" />
            <div className="crouss-div">
              <div className="crous-text1">Register</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swip-box">
          <Link to="/programme">
            <img src={time} alt="sponser" className="crousimg" />
            <div className="crouss-div">
              <div className="crous-text1">Programme</div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swip-box">
          <Link to="/speakers">
            <img src={speak} alt="sponser" className="crousimg" />
            <div className="crouss-div">
              <div className="crous-text1">Speakers</div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
