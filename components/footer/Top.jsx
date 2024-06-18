"use client";

import { AiFillHome, AiFillPhone, AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FiInstagram, FiMonitor } from "react-icons/fi";

import { GoMail } from "react-icons/go";
import React from "react";
import Title from "./Title";

const links = [
  { id: 1, name: "آنچه مهمانان هنگام اجاره هتل می خواهند بدانند" },
  { id: 2, name: "چگونه یک میزبان عالی برای اجاره کنندگان هتل باشیم" },
  { id: 3, name: "ارائه یک فضای پذیرایی کامل به دوستداران اتاق vip" },
  { id: 4, name: "برای سفر بعدی خود الهام بگیرید" },
  { id: 5, name: "اجاره لوکس ترین اتاق ها برای تعطیلات بعدی شما" },
  { id: 6, name: "اتاق vip برای اجاره" },
];
const Top = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <Title title="درباره Dalya Gasht" />
        <p className="text-gray-500">
          با چند کلیک می‌توانید پروازها و اقامتگاه‌های مختلف را بررسی کرده و با انتخاب مناسب‌ترین گزینه‌ها سفر خوشی را تجربه کنید.
        </p>
      </div>
      <div>
        <Title title="آخرین خبرها" />
        <ul>
          {links.map((link) => (
            <li className="text-gray-500 hover:text-[#0090cc]  cursor-pointer mb-2 duration-200" key={link.id}>{link.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Title title="تماس با ما" />
        <div className="flex text-gray-500  flex-col justify-center items-center md:items-start">
          <div className="flex  mb-3 items-center gap-2">
            <AiFillHome />
            <h3>کیش , تهران</h3>
          </div>
          <div className="flex  mb-3 items-center gap-2">
            <AiFillPhone />
            <h3>(021) 555-5555</h3>
          </div>
          <div className="flex  mb-3 items-center gap-2">
            <GoMail />
            <h3>email@DalyaGasht.com</h3>
          </div>
          <div className="flex  mb-3 items-center gap-2">
            <FiMonitor />
            <h3>Dalya Gasht Reserve</h3>
          </div>
        </div>
        <div className="flex gap-5 justify-center md:justify-start items-center text-[#BFA888] text-xl mt-8">
          <BiLogoFacebook className='duration-200 hover:text-[#0090cc] hover:scale-110 cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full' />
          <AiOutlineTwitter className='duration-200 hover:text-[#0090cc] hover:scale-110 cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full' />
          <AiOutlineGooglePlus className='duration-200 hover:text-[#0090cc] hover:scale-110 cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full' />
          <FiInstagram className='duration-200 hover:scale-110 hover:text-[#0090cc] cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full' />
          <BiLogoLinkedin className='duration-200 hover:scale-110 hover:text-[#0090cc] cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default Top;
