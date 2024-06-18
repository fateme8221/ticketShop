"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const terminals = [
  { id: 1, value: "beyhaghi", name: "تهران پایانه بیهقی" },
  { id: 2, value: "south", name: "تهران پایانه جنوب" },
  { id: 2, value: "west", name: "تهران پایانه غرب" },
];
const FinalTerminals = () => {
  const [toggle, setToggle] = useState(true);
  const [checkboxes, setCheckboxes] = useState({
    beyhaghi: false,
    south: false,
    west: false
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
        <h3>پایانه مبدا</h3>
        <IoChevronDown
          className={`${
            toggle ? "rotate-180 text-blue-600" : "text-gray-500"
          } duration-200`}
        />
      </div>
      <div className={`p-4 pt-2 ${toggle ? 'block' : 'hidden'}`}>
        {terminals.map((terminal) => (
          <div key={terminal.id} className="flex items-center my-2">
            <input
              type="checkbox"
              id={`checkbox-${terminal.id}`}
              name={terminal.value}
              checked={checkboxes[terminal.value]}
              onChange={handleCheckboxChange}
              className="w-5 h-5"
            />
            <label htmlFor={`checkbox-${terminal.id}`} className="mr-2 text-gray-500 medium">
              {terminal.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalTerminals;
