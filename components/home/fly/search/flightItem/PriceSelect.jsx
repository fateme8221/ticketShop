import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";


const PriceSelect = ({ open, setOpen }) => {
    const router = useRouter()
    return (
        <div className="flex pb-2 lg:flex-col lg:border-r px-5  gap-2 lg:gap-2 lg:justify-center justify-between  items-center ">
            <div className="flex flex-col gap-1 items-center   ">
                <span className="text-gray-600 mr-[0.4rem] text-xs bold lg:text-base">  نرخ رسمی ایرلاین    </span>
                <div>
                    <span className="text-slate-800 mr-[0.4rem] bold lg:text-2xl lg:text-[#0077db]">   ۴,۰۵۶,۰۰۰      </span>
                    <span className="text-slate-800 mr-[0.4rem]  lg:text-base text-xs ">  تومان     </span>
                </div>
                <div onClick={() => setOpen(!open)} className="flex gap-2 text-red-600 lg:hidden">
                    <span className="  mr-[0.4rem] text-xs">  اطلاعات بیشتر   </span>
                    <IoIosArrowDown className={` ${open && 'rotate-180 duration-200'} duration-200 text-sm `} />
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Button label='انتخاب پرواز' onclick={() => router.push('/flights/city-to-city/slug/passengers/')} />
                <span className="text-red-600 text-[0.63rem]  text-xs  ">    ۹ صندلی باقی مانده     </span>
            </div>
        </div>
    );
};

export default PriceSelect;





