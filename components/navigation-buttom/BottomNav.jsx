"use client";

import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoOptionsOutline } from "react-icons/io5";
import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { usePathname, useRouter } from "next/navigation";


const BottomNav = () => {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full lg:hidden h-16 bg-white border-t border-gray-200 ">
      <div className="grid h-full  grid-cols-4 mx-auto font-medium">
        <button
          onClick={() => router.push('/')}
          type="button"
          className={`inline-flex flex-col items-center justify-center px-5    ${path === '/' ? 'bg-gray-100 text-[#0090cc] ' : 'text-gray-500 '}`}
        >
          <FaHome className={`w-5 h-5 mb-2  ${path === '/' ? ' text-[#0090cc] ' : 'text-gray-500 '}  `} />
          <span className="text-[10px]    ">
            خانه
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5   "
        >
          <SiYourtraveldottv className="w-5 h-5 mb-2 text-gray-500   " />
          <span className="text-[10px] text-gray-500   ">
            سفرهای من
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5   "
        >
          <IoOptionsOutline className="w-5 h-5 mb-2 text-gray-500   " />
          <span className="text-[10px] text-gray-500   ">
            آپشن
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5   "
        >
          <CgProfile className="w-5 h-5 mb-2 text-gray-500   " />
          <span className="text-[10px] text-gray-500   ">
            حساب کاربری
          </span>
        </button>
      </div>
    </div >
  );
};

export default BottomNav;
