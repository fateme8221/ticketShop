"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import React from "react";
import Slide from "./Slide";
import img1 from "../../../../public/images/bus04-ce1c7fff.png";
import img2 from "../../../../public/images/bus05-31fc902f.png";
import img3 from "../../../../public/images/bus04-ce1c7fff.png";

const tickets = [
  {
    id: 1,
    image: img1,
    label: "بلیط اتوبوس VIP",
    text: "اگر زیاد با اتوبوس سفر نکرده‌ باشید، احتمالا از خود می‌پرسید که چرا باید برای سفر بلیط VIP تهیه کنید. اما کافی است یک بار بلیط VIP بخرید و از سفری آرام با امکانات رفاهی عالی لذت ببرید. خرید بلیط اتوبوس VIP در سفرهای طولانی اهمیت بیشتری پیدا می‌کند، چرا که در سفر طولانی به آسایش و شرایط بهتر برای خواب بیشتر نیاز خواهید داشت. اتوبوس‎های VIP صندلی‌های استاندارد و راحتی دارند که در صورت تمایل به تخت تبدیل می‌شوند.",
  },
  {
    id: 2,
    image: img2,
    label: "بلیط اتوبوس ارزان",
    text: "اگر می‌خواهید هزینه سفرتان کمتر شود، احتمالا به دنبال بلیط ارزان هستید. همان طور که اشاره شد قیمت بلیط به عوامل مختلفی نظیر طول سفر و شرکت اتوبوس‌رانی بستگی دارد.  بنابراین برای پیدا کردن اتوبوس ارزان در یک مقصد مشخص، باید بلیط را از شرکتی بخرید که ارزان‌فروش‌تر از بقیه است. برای این کار پس از اینکه مبدا، مقصد و تاریخ سفر را در علی‌بابا مشخص می‌کنید، لیست مفصلی از بلیط‌ها را می‌بینید. ",
  },
  {
    id: 3,
    image: img1,
    label: "بلیط اتوبوس VIP",
    text: "اگر زیاد با اتوبوس سفر نکرده‌ باشید، احتمالا از خود می‌پرسید که چرا باید برای سفر بلیط VIP تهیه کنید. اما کافی است یک بار بلیط VIP بخرید و از سفری آرام با امکانات رفاهی عالی لذت ببرید. خرید بلیط اتوبوس VIP در سفرهای طولانی اهمیت بیشتری پیدا می‌کند، چرا که در سفر طولانی به آسایش و شرایط بهتر برای خواب بیشتر نیاز خواهید داشت. اتوبوس‎های VIP صندلی‌های استاندارد و راحتی دارند که در صورت تمایل به تخت تبدیل می‌شوند.",
  },
];
const ReserveSlider = () => {
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
          }
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-16"
      >
        {tickets.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReserveSlider;
