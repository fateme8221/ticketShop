import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import Image from "next/image";
import mahan from '@/public/images/W5.png';
import { IoIosArrowDown } from "react-icons/io";

const FlightTime = ({ open, setOpen }) => {

    return (
        <div className="p-4 col-span-2 lg:flex-col gap-4 flex flex-col md:flex-row  lg:items-center justify-between">
            <div className="flex flex-row items-center justify-center lg:gap-4  gap-2">
                <Image src={mahan} alt='mahan' width={50} height={50} className="rounded-full " />
                <span className="text-gray-900 bg-slate-100 px-3 rounded-2xl text-xs lg:text-sm">سیستمی </span>
                <span className=" text-orange-800 bg-yellow-300 px-3 rounded-2xl text-xs lg:text-sm">بیزینس</span>
                <span className="text-gray-900 bg-slate-100  px-2 flex  items-center text-center rounded-2xl  text-[0.6rem]"><h3 className="mt-[0.05rem]">Boeing MD</h3></span>
            </div>
            <div className="flex flex-row gap-2 lg:gap-12 justify-between items-center lg:border-b-0 border-b pb-2">
                <span className="text-gray-600 mr-[0.4rem]">  ماهان </span>
                <div className="flex gap-2 ">
                    <h3 className="bold text-xl">۰۹:۱۵</h3>
                    <div className="flex items-center">
                        <IoIosAirplane className="text-[#0174A5] rotate-180 " />
                        <div className="w-24 lg:w-28 border-gray-300 border border-dotted" />
                        <FaRegCircle className="text-[#0174A5] text-xs" />
                    </div>
                    <h3 className="bold text-xl">۱۱:۱۰</h3>
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className="lg:flex lg:flex-row gap-2 justify-center cursor-pointer items-center lg:border-b-0 border-b hidden">
                <span className=" mr-[0.4rem] text-sm text-[#0090cc] ">  اطلاعات پرواز </span>
                <IoIosArrowDown className={` ${open && 'rotate-180 duration-200'} duration-200 text-[#0090cc] text-sm `} />
            </div>
        </div>
    );
};

export default FlightTime;





