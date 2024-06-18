"use client";

import React, { useState } from "react";

import { FaCoins } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import Image from "next/image";
import { MdDiscount } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import owner from "../../../../../public/images/pp-_1_-min1.png";

const Reserve = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <div className={`${show && 'bg-black/50 fixed inset-0'} lg:hidden`} onClick={()=> setShow(false)}/>
      <div
        className={`rounded-lg shadow-md p-5 h-fit border ${
          show ? "fixed inset-0 h-full md:h-[72vh] md:bottom-16 lg:h-fit md:m-auto lg:m-0" : "hidden"
        }  lg:block lg:sticky top-14 lg:top-20 bg-white md:w-[500px] lg:w-full`}
      >
        <div className="flex items-center gap-5 mb-5">
          <Image
            alt="owner"
            src={owner}
            width={70}
            height={70}
            className="rounded-full shadow-md"
          />
          <div>
            <h3 className="text-gray-600 text-sm">میزبان</h3>
            <h2 className="text-gray-800 medium">وحید حسینی راد</h2>
          </div>
        </div>
        <div>
          <div className="border text-gray-800 mb-5 bg-teal-50 px-4 py-2 flex items-center justify-between rounded-md">
            <div>
              <h2 className="text-sm">1402/10/29 – 1402/11/02</h2>
              <h3 className="text-xs medium">3 شب</h3>
            </div>
            <FaRegCalendarAlt className="text-teal-700" />
          </div>
          <label className="w-full relative">
            <input
              className={`
          peer
          w-full
          p-3
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
          top-1
          right-3
          px-2
          text-slate-400
          peer-focus:text-slate-500 bg-white duration-200  
        `}
            >
              تعداد مسافران
            </span>
            <div className=" absolute flex justify-between w-full text-base tracking-wide text-slate-500 pointer-events-none px-4 top-2">
              <span>1 مسافر</span>
              <HiUserGroup className="text-teal-700" />
            </div>
          </label>
          <div className="p-3 rounded-md border space-y-3 mt-5 bg-slate-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RiMoneyDollarCircleFill className="text-teal-700 text-xl" />
                <h2 className="medium text-gray-800">قیمت هر شب:</h2>
              </div>
              <div className="flex gap-1">
                <h3 className="text-gray-400 heavy">10.000.000</h3>
                <span className="text-teal-700 text-sm bold">ریال</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MdDiscount className="text-teal-700 text-xl" />
                <h2 className="medium text-gray-800">تخفیف:</h2>
              </div>
              <div className="flex gap-1">
                <h3 className="text-gray-400 heavy">10</h3>
                <span className="text-teal-700 text-sm bold">درصد</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-2">
              <FaCoins className="text-teal-700 text-xl" />
              <h2 className="medium text-gray-800">جمع کل:</h2>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="text-gray-600 text-lg heavy">9.000.000</h3>
              <span className="text-teal-700 text-sm bold">ریال</span>
            </div>
          </div>
          <button
            className={`bg-teal-700 hover:bg-teal-500 duration-200 w-full rounded-md text-white ${
              show && "mt-[75px] lg:mt-5 "
            } mt-5 shadow-md py-2`}
          >
            رزرو
          </button>
        </div>
      </div>
      <button
        onClick={() => setShow(!show)}
        className={`${
          show ? "bg-red-600 hover:bg-red-500" : "bg-teal-700 hover:bg-teal-500"
        } fixed lg:hidden bottom-0 inset-x-0 z-[9999]  duration-200 w-full rounded-md text-white mt-5 shadow-md py-5`}
      >
        {show ? "بستن" : "رزرو"}
      </button>
    </>
  );
};

export default Reserve;
