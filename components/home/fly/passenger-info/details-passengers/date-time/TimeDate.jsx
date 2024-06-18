"use client";
import React from "react";
import Image from "next/image";
import mahan from '@/public/images/W5.png';
import { HiArrowUpLeft } from "react-icons/hi2";
import { FaRegCircle } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";


const TimeDate = ({ open, setOpen }) => {

    return (
        <div className="flex flex-row  justify-between gap-4 ">
            <div className="flex flex-col lg:flex-row lg:gap-8 items-start lg:items-center justify-center  gap-1 lg:mb-0 mb-2">
                <div className="flex flex-row lg:flex-col items-center justify-center  gap-2">
                    <Image src={mahan} alt='mahan' width={30} height={30} className="rounded-full " />
                    <span className="text-gray-900 text-sm lg:text-base  ">ماهان </span>
                </div>
                <div className="medium text-lg">
                    <span className="text-gray-600"> جمعه ،</span>
                    <span className="text-gray-600"> ۲۰ بهمن </span>
                </div>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center ">
                <div className="flex gap-3 items-center justify-center  ">
                    <div className="flex flex-col lg:flex-row gap-2 items-center justify-center  ">
                        <h3 className=" text-sm lg:text-base ">کیش </h3>
                        <h3 className="bold text-xl">۰۹:۱۵</h3>
                    </div>
                    <div className="flex items-center">
                        <HiArrowUpLeft className="-rotate-45 text-xl lg:hidden " />
                        <div className="lg:flex items-center hidden">
                            <IoIosAirplane className="text-[#0174A5] rotate-180 " />
                            <div className="w-8 lg:w-20  border-gray-300 border border-dotted" />
                            <FaRegCircle className="text-[#0174A5] text-xs" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 items-center justify-center  ">
                        <h3 className=" text-sm lg:text-base ">تهران</h3>
                        <h3 className="bold text-xl">۰۹:۱۵</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeDate;





