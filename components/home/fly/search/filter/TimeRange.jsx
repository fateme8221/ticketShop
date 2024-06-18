"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const TimeRange = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="border-b">
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex ${toggle && "bg-blue-50"
          } cursor-pointer hover:bg-blue-50 duration-200 items-center justify-between p-4`}
      >
        <h3>ساعت حرکت </h3>
        <div className="flex items-center gap-3">
          <IoChevronDown
            className={`${toggle ? "rotate-180 text-blue-600" : "text-gray-500"
              } duration-200`}
          />
        </div>
      </div>
      <div className={`p-4 pt-2 ${toggle ? "block" : "hidden"}`}>
        <div className="grid grid-cols-2 items-center gap-2 mt-5">

        </div>
        <input dir="ltr" type="range" className="w-full mt-6" />
      </div>
    </div>
  );
};

export default TimeRange;
