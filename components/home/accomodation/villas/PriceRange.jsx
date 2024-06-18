"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const PriceRange = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="border-b">
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex ${
          toggle && "bg-blue-50"
        } cursor-pointer hover:bg-blue-50 duration-200 items-center justify-between p-4`}
      >
        <h3>رنج قیمتی</h3>
        <div className="flex items-center gap-3">
          <h2 className="text-gray-500">قیمت هر شب</h2>
          <IoChevronDown
            className={`${
              toggle ? "rotate-180 text-blue-600" : "text-gray-500"
            } duration-200`}
          />
        </div>
      </div>
      <div className={`p-4 pt-2 ${toggle ? "block" : "hidden"}`}>
        <div className="grid grid-cols-2 items-center gap-2 mt-5">
          <label className="w-full relative">
            <input
              className={`
          peer
          w-full
          p-2
          medium
          bg-white 
          bg-inherit
          border
          border-gray-300
          focus:border-blue-500
          text-slate-500
          rounded-md
          focus:ring-0
          outline-none
          transition
          duration-200
        `}
            />
            <span
              className={`
          absolute 
          tracking-wide
          pointer-events-none
          peer-focus:text-[0.6rem]
          peer-valid:text-[0.6rem] peer-valid:-translate-y-5
          top-3
          right-3
          px-2
          text-slate-400
          peer-focus:text-slate-500 bg-white duration-200  
        `}
            >
              حداکثر
            </span>
            <span className=" absolute text-base tracking-wide text-slate-500 pointer-events-none right-3 px-2 top-3">
              3500000
            </span>
          </label>
          <label className="w-full relative">
            <input
              className={`
          peer
          w-full
          p-2
          medium
          bg-white 
          bg-inherit
          border
          border-gray-300
          focus:border-blue-500
          text-slate-500
          rounded-md
          focus:ring-0
          outline-none
          transition
          duration-200
        `}
            />
            <span
              className={`
              absolute 
          tracking-wide
          pointer-events-none
          peer-focus:text-[0.6rem]
          peer-valid:text-[0.6rem] peer-valid:-translate-y-5
          top-3
          right-3
          px-2
          text-slate-400
          peer-focus:text-slate-500 bg-white duration-200  
        `}
            >
              حداقل
            </span>
            <span className=" absolute text-base tracking-wide text-slate-500 pointer-events-none right-3 px-2 top-3">
              0
            </span>
          </label>
        </div>
        <input type="range" className="w-full mt-6" />
      </div>
    </div>
  );
};

export default PriceRange;
