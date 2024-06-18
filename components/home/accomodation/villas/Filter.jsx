"use client";

import City from "./City";
import PriceRange from "./PriceRange";
import React from "react";
import Region from "./Region";
import Type from "./Type";
import useFilter from "@/stores/useFilter";

const Filter = () => {
  const { isOpen, onClose } = useFilter();
  return (
    <div
      className={`border ${
        !isOpen ? "hidden xl:block": 'z-[70] lg:z-50'
      } fixed h-[100vh] overflow-auto inset-0 rounded-md shadow-md bg-white lg:h-fit lg:sticky lg:top-16`}
    >
      <h2 className="h-12 p-4 bold text-lg hover:text-red-600 text-gray-700 cursor-pointer duration-200 w-fit lg:hidden" onClick={() => onClose()}>
        X
      </h2>
      <Type />
      <PriceRange />
      <Region />
      <City />
    </div>
  );
};

export default Filter;
