import React from "react";
import { HiArrowUpLeft } from "react-icons/hi2";


const TimeDate = ({ open, setOpen }) => {

    return (
        <div className="lg:flex lg:flex-col justify-center gap-1 lg:justify-start hidden">
            <div className="flex flex-col lg:flex-row lg:gap-4 items-center justify-center  gap-1 ">
                <div className="flex flex-row lg:flex-col items-center justify-center  gap-2">
                    <span className="text-gray-900 text-sm  "> بزرگسال  </span>
                </div>
                <div className=" ">
                    <span className="text-gray-600 bold"> ۱,۳۷۰,۰۰۰  </span>
                    <span className="text-gray-600 bold"> تومان  </span>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4 items-center justify-center  gap-1 ">
                <div className="flex flex-row lg:flex-col items-center justify-center  gap-2">
                    <span className="text-gray-900 text-sm  "> مجموع  </span>
                </div>
                <div className=" ">
                    <span className="text-gray-600 bold"> ۱,۳۷۰,۰۰۰  </span>
                    <span className="text-gray-600 bold"> تومان  </span>
                </div>
            </div>
        </div>
    );
};

export default TimeDate;





