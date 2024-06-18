import Button from '@/components/Button';
import React from 'react';
import { useRouter } from "next/navigation";


const ConfirmAndContinue = () => {
    const router = useRouter();
    const onClick = () => {
        router.push('/flights/city-to-city/slug/confirm/');
    }
    return (
        <div className="  px-9 lg:px-0  sticky bottom-16 lg:static">
            <div className='bg-gray-700 gap-3   p-3 lg:px-5 mt-10 border rounded-lg overflow-hidden flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
                <div className='flex flex-col w-full lg:flex-row lg:justify-between gap-2'>
                    <div className='flex lg:w-2/3'>
                        <h2 className='text-white text-xs  lg:text-lg bold '>با کلیک روی تایید و ادامه خرید با قوانین پرواز موافقت کرده‌اید.</h2></div>
                    <div className='flex  lg:justify-end justify-between'>
                        <h2 className='text-white text-xs lg:hidden  lg:text-lg bold  '>مجموع قیمت</h2>
                        <h2 className='text-[#fdb713] text-xs  lg:text-xl bold '>۱,۳۷۰,۰۰۰ تومان</h2>
                    </div>
                </div>
                <Button className='w-full lg:py-2 lg:w-1/4' label='تایید و ادامه  خرید'
                    onclick={onClick} />

            </div>
        </div>
    );
};

export default ConfirmAndContinue;