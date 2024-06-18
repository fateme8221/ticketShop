import React from "react";

const Row = ({ item }) => {
  return (
    <div className="grid grid-cols-[4fr_4fr] lg:grid-cols-[1fr_7fr] lg:border  px-3 lg:px-0 h-10 ">
      <div className="flex items-center bold  text-sm lg:text-base lg:justify-center justify-start lg:bg-slate-100">
        {item.name}
      </div>
      <div className="flex items-center justify-end lg:justify-center"> پایانه </div>
    </div>
  );
};

export default Row;
