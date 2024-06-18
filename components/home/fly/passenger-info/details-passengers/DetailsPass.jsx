"use client"
import React, { useState } from "react";
import DateCmpny from "./date-time/DateCmpny";


const DetailsPass = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" mt-32 lg:mt-20 px-9 lg:px-0">
      <div className="  border rounded-lg overflow-hidden shadow-md bg-white mb-5 ">
        <DateCmpny open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default DetailsPass;
