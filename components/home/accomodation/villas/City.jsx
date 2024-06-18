"use client";

import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

const City = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="border-b">
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex ${
          toggle && "bg-blue-50"
        } hover:bg-blue-50 duration-200 cursor-pointer items-center justify-between p-4`}
      >
        <h3>انتخاب شهر</h3>
        <IoChevronDown
          className={`${
            toggle ? "rotate-180 text-blue-600" : "text-gray-500"
          } duration-200`}
        />
      </div>
      <div className={`p-4 pt-3 ${toggle ? "block" : "hidden"}`}>
        <div className="relative">
          <input
            className="border w-full focus:border-blue-500 rounded-md p-2 pr-8 outline-none"
            placeholder="جستجوی شهر"
          />
          <CiSearch className="absolute right-2 top-3 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default City;
