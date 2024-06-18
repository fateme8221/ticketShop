"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import React from "react";
import img1 from "../../../../public/images/Villa_ba1479844d.png";
import img2 from "../../../../public/images/Boom_Gardi_8e48d9e15f.png";
import img3 from "../../../../public/images/Kolbe_4e1a976a77.png";
import img4 from "../../../../public/images/Apartment_15a93f6fe7.png";
import { useRouter } from "next/navigation";

const items = [
  { id: 1, link:'all-villa',label: "اجاره ویلا", image: img1 },
  { id: 2, link:'',label: "رزرو اقامتگاه بومگردی", image: img2 },
  { id: 3, link:'',label: "اجاره کلبه جنگلی", image: img3 },
  { id: 4, link:'',label: "اجاره آپارتمان مبله", image: img4 },
];
const VilaItemsSlider = () => {
  const router = useRouter();
  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            spaceBetween: 5,
            slidesPerView: 1,
          },
          558: {
            spaceBetween: 5,
            slidesPerView: 2,
          },
          998: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1200: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div onClick={()=> router.push(`${item.link}`)} className="border cursor-pointer overflow-hidden rounded-lg group shadow hover:shadow-md duration-200">
              <div className="overflow-hidden">
                <Image src={item.image} alt="item" className="group-hover:scale-105 duration-200" />
              </div>
              <h2 className="medium p-4 text-gray-800">{item.label}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VilaItemsSlider;
