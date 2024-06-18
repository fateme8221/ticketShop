import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const LinkItem = ({ name, sub }) => {
  return (
    <div className="relative group">
      <li
        className="flex items-center text-gray-500 gap-2 hover:bg-slate-100 hover:text-[#0090cc] p-2 rounded-md cursor-pointer duration-200"
      >
        <span>{name}</span>
        {sub && <FaAngleDown className="group-hover:rotate-180 duration-200" />}
      </li>
      {sub && (
        <div
          className="absolute hidden group-hover:block border-t top-10 bg-white shadow-md w-28 rounded-md overflow-hidden"
        >
          {sub.map((item, index) => (
            <Link href={item.page} key={item.id}>
              <h3
                className={`whitespace-nowrap text-sm text-gray-500 cursor-pointer duration-200 hover:bg-[#0090cc] hover:text-white p-2 ${sub.length - 1 !== index && "border-b"
                  }`}
              >
                {item.link}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkItem;
