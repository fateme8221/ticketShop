import React from "react";

const Row = ({ item }) => {
  return (
    <div className="grid grid-cols-[1fr_7fr] h-10 border">
      <div className="flex items-center justify-center bg-slate-100">
        {item.name}
      </div>
      <div className="flex items-center justify-center">اصفهان پایانه صفه</div>
    </div>
  );
};

export default Row;
