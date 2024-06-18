"use client";
import Image from "next/image";
import React from "react";

const VilaSlide = ({ image, label, price, location }) => {
  return (
    <div className="rounded-lg group border overflow-hidden">
      <div className="overflow-hidden relative h-52">
        <Image className="group-hover:scale-105 duration-200" alt="vila" src={image} fill />
      </div>
      <div className="p-3">
        <div className="text-right mb-4">
          <h2 className="text-[18px] bold">{label}</h2>
          <span className="text-sm text-gray-500">{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">قیمت هر شب</span>
          <div className="flex items-center gap-2">
            <div className="text-blue-600">{price}</div>
            <span className="text-sm text-gray-600">ریال</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VilaSlide;
