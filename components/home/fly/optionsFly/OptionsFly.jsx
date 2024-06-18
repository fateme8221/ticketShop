"use client";

import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";


const OptionsFly = () => {

  const [op, setOp] = useState(false);
  const meRef = useRef(null);
  const handler = (e) => {
    if (meRef.current && !meRef.current.contains(e.target)) {
      setOp(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [])


  const [selected, setSelected] = useState("یک طرفه");
  const options = [
    { id: 1, name: "یک طرفه" },
    { id: 2, name: "رفت و برگشت" },
  ];

  return (
    <div className="relative group flex">
      <div ref={meRef}
        onClick={() => setOp(!op)}
        className="flex p-3 h-5 select-none items-center text-xs text-gray-500 gap-2 border rounded-2xl hover:bg-slate-100 hover:text-[#0090cc]   cursor-pointer duration-200"
      >
        <span>{selected}</span>
        <FaAngleDown className={`${op && "rotate-180"} duration-200`} />
      </div>
      {op && (
        <div id="option" className="absolute border z-30 text-xs block border-t top-7 bg-white shadow-md rounded-md overflow-hidden">
          {options.map((option, index) => (
            <div
              key={option.id}
              onClick={(e) => {
                setSelected(option.name);
                setOp(false);
              }}
              className={`whitespace-nowrap  ${options.length - 1 !== index && 'border-b'}  text-gray-500 cursor-pointer duration-200 hover:bg-[#0090cc] hover:text-white p-2`}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionsFly;
