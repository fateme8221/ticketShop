"use client";
import { useState, useEffect } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import FlySlide from './FlySlide';

const Slider = ({ flights }) => {

  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 5,
          },
          778: {
            slidesPerView: 5,
          },
          998: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 8,
          },
        }}
        loop={true}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        navigation={true}
        modules={[Navigation]}
        className="swiperFly p-4 lg:mb-2 rounded-lg "
      >
        {flights.map((item) => (
          <SwiperSlide key={item.id}>
            <FlySlide  {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
