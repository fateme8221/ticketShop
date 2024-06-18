"use client";

import React, { useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";

const Question = ({ title, text, questions, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${index !== questions.length - 1 && "border-b"
        } border-gray-300 group duration-200`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center cursor-pointer justify-between py-4 px-5 hover:bg-blue-50 ${open && "bg-blue-50"
          }`}
      >
        <div className="flex gap-2">
          <span className='w-1 h-1'>
            <FaRegQuestionCircle className=" text-[#17A2B8]" />
          </span>
          <h2 className="bold text-xs sm:text-base mr-4 text-gray-700">{title}</h2>
        </div>
        <FaAngleDown
          className={` group-hover:text-[#17A2B8] ${open ? "text-[#17A2B8] rotate-180" : "text-gray-800"
            } duration-200`}
        />
      </div>
      <div className={`${open ? "block" : "hidden"} py-5 px-9 text-gray-500`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Question;
