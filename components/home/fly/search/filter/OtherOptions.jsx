"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const otherOptions = [
  { id: 1, value: "reapet", name: "نمایش بلیط‌های تکراری" },
  { id: 2, value: "available", name: "نمایش بلیط‌های موجود" },
];

const OtherOptions = () => {
  const [checkboxes, setCheckboxes] = useState({
    reapet: false,
    available: false
  });

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
        <h3> موارد دیگر </h3>
        <IoChevronDown className={`${toggle ? 'rotate-180 text-blue-600' : 'text-gray-500'} duration-200`} />
      </div>
      <div className={`p-4 pt-2 ${toggle ? 'block' : 'hidden'}`}>
        {otherOptions.map((region) => (
          <div key={region.id} className="flex items-center my-2">
            <input
              type="checkbox"
              id={`checkbox-${region.id}`}
              name={region.value}
              checked={checkboxes[region.value]}
              onChange={handleCheckboxChange}
              className="w-5 h-5"
            />
            <label htmlFor={`checkbox-${region.id}`} className="mr-2 text-gray-500 medium">
              {region.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherOptions;
