"use client";

import { MdOutlineFilterList } from "react-icons/md";
import React from "react";

import useFilter from "@/stores/useFilter";
import TicketItem from "./TicketItem";

const TicketsList = () => {
  const { onBusOpen } = useFilter();
  return (
    <div>
      <div
        onClick={() => onBusOpen()}
        className="flex items-center gap-1 mb-2 cursor-pointer w-fit lg:hidden group"
      >
        <MdOutlineFilterList className="group-hover:text-blue-600 duration-200" />
        <h2 className=" text-slate-800 bold group-hover:text-blue-600 duration-200">
          فیلترها
        </h2>
      </div>
      <div className="space-y-5">
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
      </div>
    </div>
  );
};

export default TicketsList;
