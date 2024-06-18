"use client";

import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";


const TypeTicket = () => {
  const [checkboxes, setCheckboxes] = useState(false);

  const [toggle, setToggle] = useState(true)

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  return (
    <div className="border-b">
      <div onClick={() => setToggle(!toggle)} className={`flex ${toggle && 'bg-blue-50'} hover:bg-blue-50 duration-200 cursor-pointer items-center justify-between p-4`}>
        <h3>نوع بلیط </h3>
        <IoChevronDown className={`${toggle ? 'rotate-180 text-blue-600' : 'text-gray-500'} duration-200`} />
      </div>
      <div className={`p-4 flex items-center pt-2 ${toggle ? 'block' : 'hidden'}`}>
        <input
          type="checkbox"
          name="sistem"
          checked={checkboxes["sistem"]}
          onChange={handleCheckboxChange}
          className="w-5 h-5"
        />
        <label className="mr-2 text-gray-500 medium">
          سیستمی
        </label>
      </div>
    </div>
  );
};

export default TypeTicket;
