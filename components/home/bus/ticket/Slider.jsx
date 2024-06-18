"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import React from "react";
import Slide from "./Slide";
import img1 from "../../../../public/images/bus01-6af3a02d.png";
import img2 from "../../../../public/images/bus02-c540fe0e.png";
import img3 from "../../../../public/images/bus03-3bf1445d.png";

const news = [
  {
    id: 1,
    image: img1,
    label: "خرید بلیط اتوبوس",
    text: "خرید اینترنتی بلیط اتوبوس، مسافران را از اینکه خیلی زودتر در ترمینال حضور داشته باشند، بی‌نیاز ساخته است. شما می‌توانید همین طور که در خانه نشسته‌اید، خرید بلیط برای اتوبوس را انجام دهید. برای اینکه سفر را برای خود راحت‌تر و لذت‌بخش‌تر کنید، می‌توانید برای خرید بلیط VIP اقدام کنید.",
  },
  {
    id: 2,
    image: img2,
    label: "رزرو بلیط اتوبوس",
    text: "رزرو بلیط راهکاری دوراندیشانه و عاقلانه برای کسانی است که می‌خواهند از زمان‌بندی سفرشان مطمئن باشند. این موضوع زمانی اهمیت بیشتری می‌یابد که بخواهید بلیط را برای زمان‌های پرسفر رزرو کنید. راحت‌ترین روش، رزرو اینترنتی بلیط اتوبوس از سایت علی‌بابا است.",
  },
  {
    id: 3,
    image: img3,
    label: "قیمت بلیط اتوبوس",
    text: "همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.",
  },
];
const Slider = () => {
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
          1200: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-16"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
