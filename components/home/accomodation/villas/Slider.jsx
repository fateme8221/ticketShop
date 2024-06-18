"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import React from "react";
import img1 from "../../../../public/images/b025b7d2-1685-4106-b6cc-dc28a6aed609.jpg";
import img2 from "../../../../public/images/0bfccb70-1c7f-471b-8186-607b48a5ca91.jpg";
import img3 from "../../../../public/images/65fbab84-aab7-47c2-8a69-0039ed2b7026.jpg";

const images = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
];
const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{height: '250px'}}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <Image className="" width={700} height={500} src={item.image} alt={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
