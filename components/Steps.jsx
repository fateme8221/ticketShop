"use client";

import React, { useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import AuthContext from "@/components/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

const Steps = () => {
  const { step_items } = useContext(AuthContext);
  const router = useRouter();
  const path = usePathname();
  const step = path === '/flights/city-to-city/slug/passengers/' ? 0 : path === '/flights/city-to-city/slug/confirm/' ? 1 : '';

  const subject = step === 0 ? 'مشخصات مسافران' : step === 1 ? 'تایید اطلاعات' : '';
  return (
    <div className="flex flex-col fixed  bg-[#ffffff] justify-start lg:justify-between  top-0 inset-x-0 z-[60]   items-center  medium py-2 lg:py-8 px-2 lg:px-24 border-b ">
      <div className="flex w-full justify-start items-center lg:hidden pt-2 gap-2">
        <button onClick={() => router.back()} className={`flex   justify-start text-3xl items-center cursor-pointer`}><IoIosArrowRoundForward className="text-4xl" /> </button>
        <h3 className="bold">{subject}</h3>
      </div>
      <div className="lg:flex lg:justify-center grid h-full lg:h-auto lg:w-auto  grid-cols-5  w-full ">
        {step_items.map((item) => (
          <div key={item.id} className={`flex flex-col ${item.id === step_items.length - 1 && "lg:items-end"} ${item.id === 0 && "lg:items-start"} items-center gap-2 lg:gap-4`}>
            <div className={`flex  flex-row text-gray-400 gap-4 items-center  ${step > item.id && "text-red-500"}`}>
              {item.id !== step_items.length && (
                <div className="hidden lg:block" >
                  <div
                    className={`${step + 1 >= item.id ? "border-red-500" : "border-gray-500"
                      }  ${item.id == 0 ? 'hidden' : 'block'}  border mt-2 w-16 xl:w-28`}
                  />
                </div>
              )}
              <span className={`${step + 1 >= item.id && "text-red-500 animate-pulse"} text-xl`}>
                {item.icon}
              </span>
              {item.id !== step_items.length && (
                <div className="hidden lg:block" >
                  <div
                    className={`${step >= item.id ? "border-red-500" : "border-gray-500"
                      }  ${item.id == 4 ? 'hidden' : 'block'}  border mt-2 w-16 xl:w-28`}
                  />
                </div>
              )}
            </div>
            <div className={`${step + 1 >= item.id && "text-red-500"} flex gap-1`}>
              <h2 className="text-xs bold hidden lg:flex">{item.step1}</h2>
              <h2 className="text-xs  bold">{item.step2}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
