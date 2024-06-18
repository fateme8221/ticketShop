"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const regions = [
  { id: 1, value: "village", name: "روستایی" },
  { id: 2, value: "jungle", name: "جنگلی" },
  { id: 3, value: "beach", name: "ساحلی" },
  { id: 4, value: "mountain", name: "کوهستانی" },
  { id: 5, value: "city", name: "شهری" },
];

const Region = () => {
  const [checkboxes, setCheckboxes] = useState({
    village: false,
    jungle: false,
    beach: false,
    mountain: false,
    city: false
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
        <h3>چشم انداز منطقه</h3>
        <IoChevronDown className={`${toggle ? 'rotate-180 text-blue-600' : 'text-gray-500'} duration-200`} />
      </div>
      <div className={`p-4 pt-2 ${toggle ? 'block' : 'hidden'}`}>
        {regions.map((region) => (
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

export default Region;
