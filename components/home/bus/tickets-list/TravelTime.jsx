"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const TravelTime = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex ${
          toggle && "bg-blue-50"
        } cursor-pointer border-b hover:bg-blue-50 duration-200 items-center justify-between p-4`}
      >
        <h3>ساعت حرکت</h3>
        <IoChevronDown
          className={`${
            toggle ? "rotate-180 text-blue-600" : "text-gray-500"
          } duration-200`}
        />
      </div>
      <div className={`p-4 ${toggle ? "block" : "hidden"}`}>
        <div className="flex items-center medium justify-between">
          <span>00:30</span>
          <span>24:00</span>
        </div>
        <input type="range" className="w-full mt-2" />
      </div>
    </div>
  );
};

export default TravelTime;
