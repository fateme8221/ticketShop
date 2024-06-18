"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { BsFillAirplaneFill } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import ReserveForm from "@/components/ReserveForm";
import OptionsFly from "../../optionsFly/OptionsFly";


const SelectFly = () => {
    const [open, setOpen] = useState(false);

    return (
        <div id='container' className={` border-gray-300 group flex w-full justify-between  `}>
            <Link href='/' className={`flex ${open && 'hidden'} lg:hidden pb-1  justify-start text-3xl items-center cursor-pointer`}><IoIosArrowRoundForward className="text-4xl" /> </Link>
            <div className="w-full  flex justify-start flex-col ">
                <div className={`flex items-center gap-2 cursor-pointer pl-6 lg:pl-0  w-full justify-start  lg:justify-center  `}>
                    <div className={`${open && 'mr-[2.25rem] lg:mr-0'} w-full lg:w-auto flex gap-2 `}>
                        <div className="bold lg:w-auto w-full text-xs sm:text-base  text-gray-700  ">
                            <div className="flex w-full  flex-row justify-between lg:items-center gap-3 lg:justify-center py-2  ">
                                <div onClick={() => setOpen(!open)} className="flex flex-col  lg:flex-row lg:gap-6 pr-2  z-auto">
                                    <div className="flex items-center gap-2 text-gray-700  ">
                                        <BsFillAirplaneFill className="text-xl -rotate-90 lg:block hidden -z-10" />
                                        <h1 className="lg:text-lg text-base flex justify-center  ">  بلیط هواپیما تهران به بندر عباس </h1>
                                    </div>
                                    <div className="flex items-center gap-2 justify-start lg:justify-center text-gray-700">
                                        <IoCalendarSharp className="text-xl lg:block hidden" />
                                        <h1 className="text-gray-500 lg:text-lg ">یک‌شنبه ،  8 بهمن ، 1 نفر </h1>
                                    </div>
                                </div>
                                <div onClick={() => setOpen(!open)} className="flex justify-center  items-center">
                                    <FaAngleDown
                                        className={`text-lg  block lg:group-hover:text-[#17A2B8] ${open ? "text-[#17A2B8] rotate-180" : "text-gray-800"
                                            } duration-200`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <IoIosSearch onClick={() => setOpen(!open)} className="border  rounded-full cursor-pointer  text-4xl p-2 lg:bg-slate-100 bg-[#0090cc] lg:hover:bg-[#0090cc]  lg:hover:text-white text-white lg:text-black  rotate-90 " />
                </div>
                <div className={`${open ? "flex" : "hidden"} px-6 pb-5 duration-200   w-full  text-gray-500 flex flex-col gap-2`}>
                    <OptionsFly />
                    <ReserveForm />
                </div>
            </div>

        </div>

    );
};

export default SelectFly;
