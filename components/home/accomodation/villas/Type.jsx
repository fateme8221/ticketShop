"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const types = [
  { id: 1, value: "villa", name: "ویلایی" },
  { id: 2, value: "apartment", name: "آپارتمان" },
  { id: 3, value: "suite", name: "سوییت" },
  { id: 4, value: "shrank", name: "کلبه" },
];

const Type = () => {
  const [checkboxes, setCheckboxes] = useState({
    villa: false,
    apartment: false,
    suite: false,
    shrank: false,
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
        <h3>نوع اقامتگاه</h3>
        <IoChevronDown className={`${toggle ? 'rotate-180 text-blue-600' : 'text-gray-500'} duration-200`} />
      </div>
      <div className={`p-4 pt-2 ${toggle ? 'block' : 'hidden'}`}>
        {types.map((type) => (
          <div key={type.id} className="flex items-center my-2">
            <input
              type="checkbox"
              id={`checkbox-${type.id}`}
              name={type.value}
              checked={checkboxes[type.value]}
              onChange={handleCheckboxChange}
              className="w-5 h-5"
            />
            <label htmlFor={`checkbox-${type.id}`} className="mr-2 text-gray-500 medium">
              {type.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
