"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const busTypes = [
  { id: 1, value: "capacity", name: "دارای ظرفیت" },
  { id: 2, value: "final", name: "با مقصد نهایی" },
];
const BusType = () => {
  const [toggle, setToggle] = useState(true);
  const [checkboxes, setCheckboxes] = useState({
    capacity: false,
    final: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };
  return (
    <div>
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex ${
          toggle && "bg-blue-50"
        } cursor-pointer border-b hover:bg-blue-50 duration-200 items-center justify-between p-4`}
      >
        <h3>انتخاب اتوبوس های</h3>
        <IoChevronDown
          className={`${
            toggle ? "rotate-180 text-blue-600" : "text-gray-500"
          } duration-200`}
        />
      </div>
      <div className={`p-4 pt-2 ${toggle ? 'block' : 'hidden'}`}>
        {busTypes.map((type) => (
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

export default BusType;
