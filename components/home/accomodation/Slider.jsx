"use client";
import { useState, useEffect } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import VilaSlide from "./VilaSlide";

const Slider = ({ vilas }) => {

  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            spaceBetween: 5,
            slidesPerView: 1,
          },
          778: {
            spaceBetween: 5,
            slidesPerView: 2,
          },
          998: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1200: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-16"
      >
        {vilas.map((item) => (
          <SwiperSlide key={item.id}>
            <VilaSlide company {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
