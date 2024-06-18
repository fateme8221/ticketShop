"use client"

import BusCompanies from "./BusCompanies";
import BusType from "./BusType";
import FinalTerminals from "./FinalTerminals";
import React from "react";
import TravelTime from "./TravelTime";
import useFilter from "@/stores/useFilter";

const Filter = () => {
  const { isBusOpen, onBusClose } = useFilter();
  return (
    <div
      className={`border ${
        !isBusOpen && "hidden xl:block"
      } fixed h-[100vh] z-[70] lg:z-0 overflow-auto inset-0 rounded-md shadow-md bg-white lg:h-fit lg:sticky lg:top-[200px]`}
    >
      <h2
        className="h-12 p-4 bold text-lg hover:text-red-600 text-gray-700 cursor-pointer duration-200 w-fit lg:hidden"
        onClick={() => onBusClose()}
      >
        X
      </h2>{" "}
      <TravelTime />
      <BusType />
      <FinalTerminals />
      <BusCompanies />
    </div>
  );
};

export default Filter;
