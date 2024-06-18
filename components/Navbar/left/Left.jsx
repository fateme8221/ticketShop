"use client";

import { FaRegUser } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { MdCardTravel } from "react-icons/md";
import React from "react";
import useAuth from "@/stores/useAuth";

const links = [
  { id: 1, name: "مرکز پشتیبانی آنلاین", icon: <GoQuestion /> },
  { id: 2, name: "سفرهای من", icon: <MdCardTravel /> },
];
const Left = () => {
  const { onOpen } = useAuth();
  return (
    <div className="hidden lg:flex items-center gap-5">
      {links.map((link) => (
        <div
          key={link.id}
          className="flex items-center text-gray-500 hover:bg-slate-100 hover:text-[#0090cc] p-2 rounded-md cursor-pointer duration-200 gap-2"
        >
          <span>{link.icon}</span>
          <span className="hidden xl:block">{link.name}</span>
        </div>
      ))}
      <div
        onClick={() => onOpen()}
        className="flex items-center text-gray-500 hover:bg-slate-100  hover:text-[#0090cc] p-2 rounded-md cursor-pointer duration-200 gap-2"
      >
        <FaRegUser />
        <span className="hidden xl:block">ورود یا ثبت‌نام</span>
      </div>
    </div>
  );
};

export default Left;
