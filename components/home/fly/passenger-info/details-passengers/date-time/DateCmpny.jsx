import React from "react";
import { TiTick } from "react-icons/ti";
import TimeDate from "./TimeDate";
import OtherDet from "./OtherDet";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const DateCmpny = ({ open, setOpen }) => {
    const router = useRouter()
    return (
        <div className="p-3 lg:p-5  flex flex-col lg:grid lg:grid-cols-6 gap-2  lg:gap-6   justify-between ">
            <div className="flex flex-col lg:grid lg:col-span-4 lg:gap-8 gap-4 ">
                <div className="flex  flex-row  items-start justify-between gap-2 ">
                    <div className="bg-[#daddf3] p-[0.2rem]  rounded-2xl flex items-center gap-2">
                        <TiTick className=" p-[0.2rem] rounded-full bg-slate-300" />
                        <h3 className="text-[#0174A5] md:px-2 lg:text-base  text-xs">بلیط رفت</h3>
                    </div>
                    <div className="flex flex-row justify-center lg:items-start items-center gap-2 ">
                        <div className="bg-slate-100 md:px-2 p-[0.2rem] rounded-2xl flex items-center gap-2">
                            <h3 className="text-[#0174A5] lg:text-base  text-xs"> چارتری</h3>
                        </div>
                        <div className="bg-slate-100 md:px-2  p-[0.2rem] rounded-2xl flex items-center gap-2">
                            <h3 className="text-[#0174A5] lg:text-base  text-xs">اکونومی </h3>
                        </div>
                        <div className="bg-slate-100 md:px-2  p-[0.2rem] rounded-2xl flex items-center gap-2">
                            <h3 className="text-[#0174A5] lg:text-base  text-xs">Boeing MD-۸۰</h3>
                        </div>
                    </div>
                </div>
                <TimeDate />
            </div>
            <div className="flex-col flex lg:grid lg:col-span-2 items-center justify-center lg:justify-end lg:border-r  gap-4">
                <Button className='w-full ' label="تغییر بلیط" onclick={() => router.push("/flights/city-to-city/")} />
                <OtherDet />
            </div>
        </div>
    );
};

export default DateCmpny;





