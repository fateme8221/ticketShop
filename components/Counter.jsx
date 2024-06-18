"use client";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import React from "react";

const Counter = ({ title, subtitle, value, onAdd, onReduce }) => {

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex gap-1">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          className="
            w-5
            h-5
            rounded-lg
            border-[1px]
            border-red-600
            bg-red-500
            text-white
            flex
            items-center
            justify-center
            cursor-pointer
            hover:opacity-80
            transition
          "
          onClick={onReduce}
        >
          <AiOutlineMinus />
        </div>
        <div
          className="
            font-light 
            text-xl 
            text-neutral-600
            w-3
          "
        >
          {value}
        </div>
        <div
          className="
            w-5
            h-5
            rounded-full
         
            border-[1px]
            border-blue-600
            bg-blue-500
            text-white
            flex
            items-center
            justify-center
            cursor-pointer
            hover:opacity-80
            transition
          "
          onClick={onAdd}
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
