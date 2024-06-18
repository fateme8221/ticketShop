"use client";

import React from "react";

import ReserveForm from "../../ReserveForm";
import OptionsFly from "./optionsFly/OptionsFly";

const FlyReserve = () => {

  return (
    <div className="w-full relative ">
      <div className="w-full rounded-b-lg border-b border-x  flex flex-col  gap-7 p-7 lg:px-10 bg-white justify-start">
        <OptionsFly />
        <ReserveForm />
      </div>
    </div>
  );
};

export default FlyReserve;
