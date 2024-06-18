"use client";
import React, { createContext, useEffect, useState } from "react";
import SelectFly from "./SelectFly";

const NavSearch = () => {

  return (
    <div className="flex flex-col sticky  bg-[#ffffff] justify-start lg:justify-between lg:top-12 top-0 inset-x-0 z-50  lg:z-40 items-center  medium  border-gray-200 py-2 px-2 lg:px-24 border-b ">
      <SelectFly />
    </div>
  );
};

export default NavSearch;

