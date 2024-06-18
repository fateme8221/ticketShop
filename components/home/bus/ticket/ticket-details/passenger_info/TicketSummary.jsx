"use client";

import { FaBus, FaRegCircle } from "react-icons/fa";

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import logo from "@/public/images/HMSFR.jpg";

const TicketSummary = () => {
  return (
    <div className="grid lg:grid-cols-[3fr_1fr] bg-white p-5 rounded-lg shadow-lg border">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex flex-col items-center gap-2">
          <div className="shadow-md rounded-full border w-16 h-16 flex items-center justify-center">
            <Image
              className="w-10 h-10"
              src={logo}
              alt="company"
              width={400}
              height={400}
            />
          </div>
          <h2 className="bold text-xl text-slate-800">رويال سفر</h2>
          <h2 className="text-gray-500 text-xs">پایانه بیهقی</h2>
        </div>
        <div className="flex flex-col md:flex-row flex-1 items-center md:justify-evenly lg:justify-center lg:gap-16">
          <div className="flex gap-16 my-5">
            <h2 className="bold text-2xl text-slate-800">23:30</h2>
            <div className="flex items-center gap-3">
              <h2>تهران</h2>
              <div className="flex items-center">
                <FaBus className="text-[#0174A5] " />
                <div className="w-28 border-gray-300 border border-dotted" />
                <FaRegCircle className="text-[#0174A5] text-xs" />
              </div>
              <h2>اصفهان</h2>
            </div>
          </div>

          <div className="mb-5 lg:mb-0 ">
            <span className="bold text-gray-800 text-lg">سه‌شنبه، 17 بهمن</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-1 lg:flex-col items-center justify-center gap-3 md:gap-10 lg:gap-3 md:mt-12 lg:mt-0">
        <div className="w-[70%] mx-auto space-y-2 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">هر صندلی</span>
            <div>
              <span className="text-[#0174A5] medium ml-1">6,000,000</span>
              <span className="text-gray-600 text-xs">ریال</span>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <span className="text-gray-600">مجموع</span>
            <div>
              <span className="text-[#0174A5] medium ml-1">6,000,000</span>
              <span className="text-gray-600 text-xs">ریال</span>
            </div>
          </div>
        </div>
        <Button className='w-full' label="تغییر بلیط" onclick={() => ""} />
      </div>
    </div>
  );
};

export default TicketSummary;
