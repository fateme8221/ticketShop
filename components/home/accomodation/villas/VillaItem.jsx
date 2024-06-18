import Button from "@/components/Button";
import React from "react";
import Slider from "./Slider";
import { useRouter } from "next/navigation";

const VillaItem = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border rounded-lg lg:h-44 shadow-md bg-white mb-5 overflow-hidden">
      <Slider />
      <div className="p-5 col-span-2 gap-5 flex flex-col md:flex-row items-center lg:items-start justify-between">
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-lg text-slate-800 bold">
            رزرو ویلا سه خوابه ویلا هیجا{" "}
          </h2>
          <div className="flex gap-5">
            <span className="text-gray-900 text-sm">گیلان، لاهیجان</span>
            <span className="text-gray-600 text-sm">ویلا 3 خوابه</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 justify-between items-center">
          <span className="text-gray-600">قیمت برای 3 شب</span>
          <div>
            <b className="text-[#0174A5] ml-1">61,000,000</b>
            <span className="text-gray-600">ریال</span>
          </div>
          <Button onclick={() => router.push('villaId/')} label='مشاهده و رزرو' />
        </div>
      </div>
    </div>
  );
};

export default VillaItem;
