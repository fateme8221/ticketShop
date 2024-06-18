"use client";

import React, { useState } from "react";

const info = [
    { id: 1, for: "firstName", label: "ایمیل" },
    { id: 2, for: "lastName", label: "تلفن همراه " },

];
const EmailNumber = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-white p-3 lg:p-5 flex flex-col  rounded-lg shadow-lg mt-5 gap-5  border">
            <div className="flex items-center">
                <input onClick={() => setOpen(!open)} type="checkbox" value="" className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  rounded   `} />
                <label className="ms-2 text-sm lg:text-base bold font-medium text-gray-900 ">ارسال بلیط به ایمیل و شماره همراه دیگر</label>
            </div>
            <div className={` ${open ? "flex lg:flex-row-reverse" : "hidden"}  flex-col  gap-5 lg:items-center `}>
                <div className="flex flex-col lg:w-[50%] lg:flex-row lg:justify-between gap-5">
                    {info.map((item) => (
                        <label key={item.id} className="relative w-full" >
                            <input required type="text" className="w-full peer p-2 medium bg-white bg-inherit border border-gray-300 focus:border-blue-500 text-slate-500 rounded-md focus:ring-0 outline-none transition duration-200" />
                            <span className="absolute peer-focus:text-[0.8rem] pointer-events-none tracking-wide peer-valid:text-[0.6rem] peer-valid:-translate-y-6 top-3 right-3 px-2 text-slate-400 peer-focus:text-slate-500 peer-focus:-translate-y-[1.25rem] bg-white duration-200 ">
                                {item.label}
                            </span>
                        </label>
                    ))
                    }
                </div>
                <div className="flex lg:w-[50%] ">
                    <p>
                        در صورت پر کردن این فرم، بلیط و تاییدیه خرید به اطلاعات تماس همین فرم ارسال خواهد شد. همچنین «درخواست تغییرات بلیط» یا «دریافت تاییدیه» از طریق هر دو کانال‌های «شماره تماس حساب کاربری» یا «شماره تماس همین فرم» قابل انجام خواهد بود و علی‌بابا متعهد به برقراری ارتباط با یکی از این کانال‌هاست. خواهشمندیم هر دو کانال را در دسترس نگه دارید.
                    </p>
                </div>
            </div>

        </div>

    );
};

export default EmailNumber;
