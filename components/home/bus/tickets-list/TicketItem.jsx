"use client"

import { FaBus, FaRegCircle } from "react-icons/fa";

import Button from "@/components/Button";
import Image from "next/image";
import logo from "@/public/images/HMSFR.jpg";
import { useRouter } from "next/navigation";

const TicketItem = () => {
  const router = useRouter()
  return (
    <div className="grid lg:grid-cols-[3fr_1fr] bg-white p-5 rounded-lg shadow-lg border">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex flex-col items-center gap-2">
          <div className="shadow-md rounded-full border w-16 h-16 flex items-center justify-center">
            <Image
              className="w-10 h-10"
              src={logo}
              alt="company"
              width={400}
              height={400}
            />
          </div>
          <h2 className="bold text-xl text-slate-800">رويال سفر</h2>
          <h2 className="text-gray-500 text-xs">پایانه بیهقی</h2>
        </div>
        <div className="flex flex-col md:flex-row flex-1 items-center md:justify-evenly lg:justify-center lg:gap-16">
          <div className="flex gap-16 my-5">
            <h2 className="bold text-2xl text-slate-800">23:30</h2>
            <div className="flex items-center gap-3">
              <h2>تهران</h2>
              <div className="flex items-center">
                <FaBus className="text-[#0174A5] " />
                <div className="w-28 border-gray-300 border border-dotted" />
                <FaRegCircle className="text-[#0174A5] text-xs" />
              </div>
              <h2>اصفهان</h2>
            </div>
          </div>

          <div className="flex flex-col text-xs items-center justify-center mb-5 lg:mb-0 gap-1">
            <span className="medium text-gray-400">25 نفره</span>
            <span className="bold text-red-600">1 صندلی باقی مانده</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-3 md:gap-10 lg:gap-3">
        <div>
          <b className="text-[#0174A5] text-xl ml-1">61,000,000</b>
          <span className="text-gray-600">ریال</span>
        </div>
        <Button label="انتخاب بلیط" onclick={()=> router.push('/bus/tickets/ticket-details')}/>
      </div>
    </div>
  );
};

export default TicketItem;
