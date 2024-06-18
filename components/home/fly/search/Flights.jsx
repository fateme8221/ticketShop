"use client";

import React from "react";

import { MdOutlineFilterList } from "react-icons/md";
import useFilter from "@/stores/useFilter";
import Flightscalender from "./fliesCalender/Flightscalender";
import FlightItem from "./flightItem/FlightItem";

const Flights = () => {
  const { onOpen, isOpen } = useFilter();

  return (
    <>
      <div className="lg:hidden block col-span-4">
        <Flightscalender />
      </div>
      <div className="col-span-4 lg:col-span-3   px-8 lg:px-0">
        <div className="lg:block hidden ">
          <Flightscalender />
        </div>
        <div onClick={() => onOpen()} className="flex items-center gap-1 mb-4 border  border-slate-200  rounded-3xl bg-white px-3 py-2 cursor-pointer w-fit lg:hidden group">
          <MdOutlineFilterList className="group-hover:text-blue-600 duration-200 mb-1" />
          <h2 className=" text-sm text-slate-800 group-hover:text-blue-600 duration-200">
            فیلترها
          </h2>
        </div>
        <div>
          <FlightItem />
          <FlightItem />
          <FlightItem />
          <FlightItem />
          <FlightItem />
          <FlightItem />
          <FlightItem />
        </div>
      </div>
    </>
  );
};

export default Flights;
