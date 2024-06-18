"use client";

import React from "react";

const FlySlide = ({ price, time }) => {
  return (
    <div className="  items-center   flex justify-center border-y  border-r overflow-hidden">
      <div className="p-2 items-center  flex-col justify-center">
        <div className="text-xs flex items-center justify-center text-gray-500 mb-2">{time}</div>
        <div className=" text-sm flex items-center justify-center text-gray-500">
          {price}
        </div>
      </div>
    </div>
  );
};

export default FlySlide;
