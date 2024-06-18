"use client";

import React from "react";
import useFilter from "@/stores/useFilter";
import { IoIosArrowRoundForward } from "react-icons/io";
import TimeRange from "./TimeRange";
import TypeTicket from "./TypeTicket";
import AirCompanies from "./AirCompanies";
import OtherOptions from "./OtherOptions";
import ButtonFilter from "./ButtonFilter";

const Filter = () => {
  const { isOpen, onClose } = useFilter();
  return (
    <div className={`border ${!isOpen ? "hidden lg:block" : 'z-[70] lg:z-50'} fixed h-[100vh] overflow-auto inset-0 rounded-md shadow-md bg-white lg:h-fit lg:sticky lg:top-[7.45rem]`}>
      <div className="h-12 px-2 py-4  mb-6 text-4xl gap-3 flex flex-row  text-gray-700 cursor-pointer duration-200 w-fit lg:hidden" >
        <IoIosArrowRoundForward onClick={() => onClose()} />
        <div className="text-base">
          <h2>فیلترها</h2>
          <h2>نمایش 8 از 8 پرواز</h2>
        </div>
      </div>
      <h2 className="p-4 border-b lg:block hidden">نتایج: 7</h2>
      <TimeRange />
      <TypeTicket />
      <AirCompanies />
      <OtherOptions />
      <ButtonFilter />
    </div>
  );
};

export default Filter;
