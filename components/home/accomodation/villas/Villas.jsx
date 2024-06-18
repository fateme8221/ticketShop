"use client";

import React, { useEffect } from "react";

import { MdOutlineFilterList } from "react-icons/md";
import VillaItem from "./VillaItem";
import useFilter from "@/stores/useFilter";

const Villas = () => {
  const { onOpen, isOpen } = useFilter();
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add("overflow-hidden lg:overflow-auto");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [isOpen]);
  return (
    <div className="col-span-4 lg:col-span-3">
      <h2 className="text-xl mb-5 text-slate-800 bold">
        لیست ویلاهای سراسر ایران
      </h2>
      <div
        onClick={() => onOpen()}
        className="flex items-center gap-1 mb-2 cursor-pointer w-fit lg:hidden group"
      >
        <MdOutlineFilterList className="group-hover:text-blue-600 duration-200" />
        <h2 className=" text-slate-800 bold group-hover:text-blue-600 duration-200">
          فیلترها
        </h2>
      </div>
      <div>
        <VillaItem />
        <VillaItem />
        <VillaItem />
        <VillaItem />
        <VillaItem />
        <VillaItem />
        <VillaItem />
      </div>
    </div>
  );
};

export default Villas;
