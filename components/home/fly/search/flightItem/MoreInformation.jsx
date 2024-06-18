import React, { useState } from "react";
import { FaBus, FaRegCircle } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";


const MoreInformation = ({ open, setOpen }) => {

    return (

        <div className={`${open ? "flex" : "hidden"} p-4 col-span-2  gap-4  flex flex-col md:flex-row  lg:items-start justify-between lg:col-span-3  border-t`}>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-center  gap-2">
                    <span className="text-gray-900 heavy  px-3 ">جزئیات پرواز رفت </span>
                </div>
                <div className="grid grid-cols-2 gap-2 lg:gap-4 justify-between items-center  pb-2">
                    <div className="flex justify-center items-center flex-col">
                        <span className=" text-slate-500 text-xs  px-3 "> شماره پرواز</span>
                        <span className=" text-gray-700 text-sm bold   px-3 "> ۸۷۸۴</span>
                    </div>
                    <div className="flex justify-center items-center  flex-col">
                        <span className=" text-slate-500 text-xs  px-3 "> هواپیما</span>
                        <span className=" text-gray-700 text-sm bold  px-3 ">Boeing MD </span>
                    </div>
                    <div className="flex justify-center items-center  flex-col">
                        <span className=" text-slate-500 text-xs  px-3 ">  کلاس پرواز</span>
                        <span className=" text-gray-700 text-sm bold   px-3 "> بیزینس</span>
                    </div>
                    <div className="flex justify-center items-center  flex-col">
                        <span className=" text-slate-500 text-xs  px-3 ">   مقدار بار مجاز</span>
                        <span className=" text-gray-700 text-sm bold   px-3 "> ۲۰ کیلوگرم</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-center  gap-2">
                    <span className="text-gray-900 heavy  px-3 ">جزئیات قیمت   </span>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4 justify-between items-center  pb-2">
                    <div className="flex justify-between items-center flex-row w-full">
                        <span className=" text-slate-500 text-xs  px-3 ">  قیمت بزرگسال ‍</span>
                        <div className=" text-gray-700 text-sm bold  px-3 ">
                            <span> ۳,۸۴۸,۰۰۰  </span>
                            <span >  تومان </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center flex-row w-full">
                        <span className=" text-slate-500 text-xs  px-3 "> قیمت کودک</span>
                        <div className=" text-gray-700 text-sm bold  px-3 ">
                            <span> ۳۸۴,۸۰۰  </span>
                            <span >  تومان </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center flex-row w-full">
                        <span className=" text-slate-500 text-xs  px-3 "> قیمت  نوزاد</span>
                        <div className=" text-gray-700 text-sm bold  px-3 ">
                            <span> ۳۸۴,۸۰۰  </span>
                            <span >  تومان </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-center  gap-2">
                    <span className="text-gray-900 heavy  px-3 ">قوانین و شرایط کنسلی بلیط‌‌</span>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4 justify-between items-center  pb-2">
                    <div className="flex justify-between items-center flex-row w-full">
                        <span className=" text-slate-500 text-[0.6rem] lg:text-xs  px-3 ">  از لحظه صدور تا ساعت ۱۲:۰۰ ظهر ۱ روز قبل از پرواز ‍</span>
                        <div className=" text-red-600 text-sm bold  px-3 ">
                            <span> ٪۵۰  </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center flex-row w-full">
                        <span className=" text-slate-500 text-[0.6rem] lg:text-xs  px-3 ">  از ساعت ۱۲:۰۰ ظهر ۱ روز قبل از پرواز تا ۱۲ ساعت مانده به لحظه پرواز</span>
                        <div className=" text-red-600 text-sm bold  px-3 ">
                            <span> ٪۸۰  </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center flex-row w-full">
                        <span className=" text-slate-500 text-[0.6rem] lg:text-xs px-3 "> از ۱۲ ساعت مانده به لحظه پرواز به بعد </span>
                        <div className=" text-red-600 text-sm bold  px-3 ">
                            <span> ٪۹۰ </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreInformation;





