"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

const companies = [
  { id: 1, value: "royal", name: "رويال سفر" },
  { id: 2, value: "seyr", name: "سير و سفر" },
  { id: 3, value: "chabok", name: "همسفر چابکسواران" },
];
const BusCompanies = () => {
  const [toggle, setToggle] = useState(true);
  const [checkboxes, setCheckboxes] = useState({
    royal: false,
    seyr: false,
    chabok: false,
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
        <h3>شرکت‌های اتوبوسرانی</h3>
        <IoChevronDown
          className={`${
            toggle ? "rotate-180 text-blue-600" : "text-gray-500"
          } duration-200`}
        />
      </div>
      <div className={`p-4 pt-2 ${toggle ? "block" : "hidden"}`}>
        {companies.map((company) => (
          <div key={company.id} className="flex items-center my-2">
            <input
              type="checkbox"
              id={`checkbox-${company.id}`}
              name={company.value}
              checked={checkboxes[company.value]}
              onChange={handleCheckboxChange}
              className="w-5 h-5"
            />
            <label
              htmlFor={`checkbox-${company.id}`}
              className="mr-2 text-gray-500 medium"
            >
              {company.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusCompanies;
