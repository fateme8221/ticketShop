"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const AirCompanies = () => {
  const [toggle, setToggle] = useState(true);
  const [checkboxes, setCheckboxes] = useState(false);


  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  return (
    <div className="border-b">
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex ${toggle && "bg-blue-50"
          } cursor-pointer hover:bg-blue-50 duration-200 items-center justify-between p-4`}
      >
        <h3> شرکت‌های هواپیمایی</h3>
        <div className="flex items-center gap-3">
          <h2 className="text-gray-500"> به تومان </h2>
          <IoChevronDown
            className={`${toggle ? "rotate-180 text-blue-600" : "text-gray-500"
              } duration-200`}
          />
        </div>
      </div>
      <div className={`p-4 pt-2 ${toggle ? "block" : "hidden"}`}>
        <div className="grid grid-cols-2 items-center gap-2 mt-5">
          <div className={`flex items-center pt-2 ${toggle ? 'block' : 'hidden'}`}>
            <input
              type="checkbox"
              name="sistem"
              checked={checkboxes["sistem"]}
              onChange={handleCheckboxChange}
              className="w-5 h-5"
            />
            <label className="mr-2 text-gray-500 medium">
              ماهان
            </label>
          </div>
          <div className="grid text-end">
            <h2 className="text-gray-500">  از 3,900,000 </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirCompanies;

