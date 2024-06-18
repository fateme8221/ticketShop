"use client"
import Button from "@/components/Button";
import React from "react";
import { useRouter } from "next/navigation";

const ContinueToPay = () => {
  const router = useRouter();

  return (
    <div className="  px-9 lg:px-0  sticky bottom-16 lg:static">
      <div className='bg-gray-700 lg:py-5 gap-3  p-3 lg:px-5 mt-10 border rounded-lg overflow-hidden flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
        <div className="hidden flex-col w-full lg:flex lg:w-2/3 gap-5">
          <div className='flex w-full  justify-between'>
            <h2 className='text-white text-xs  lg:text-base bold '>هنگام پرداخت با استفاده از موجودی، در صورت استرداد، مبلغ قابل پرداخت به موجودی حساب شما باز خواهد گشت. </h2>
          </div>
          <div className='flex w-full justify-start '>
            <button onClick={() => router.back()} className="border rounded-md text-white p-2 px-4  hover:bg-white/10 duration-200">بازگشت</button>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/3 gap-3 lg:gap-5">
          <div className='flex w-full  justify-between'>
            <h2 className='text-white text-xs   lg:text-lg bold  '>مبلغ قابل پرداخت </h2>
            <h2 className='text-[#fdb713] text-xs  lg:text-xl bold '>۱,۳۷۰,۰۰۰ تومان</h2>
          </div>
          <div className='flex w-full lg:justify-end justify-between'>
            <Button className='w-full lg:py-2' label='پرداخت آنلاین' />
          </div>
        </div>
      </div>
    </div >

  );
};

export default ContinueToPay;
