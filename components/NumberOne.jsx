"use client"

import Image from "next/image";
import number1 from "@/public/images/Number1.webp";
import number2 from "@/public/images/Number2.webp";
import number3 from "@/public/images/Number3.webp";
import { usePathname } from "next/navigation";

const NumberOne = () => {
    const path = usePathname();
    const cities = path === '/hotel/' ? [
        { id: 1, title1: "همه هتل‌های داخلی و خارجی", title2: "کامل‌ترین وب‌سایت رزرو هتل‌های داخلی و خارجی", image: number1 },
        { id: 2, title1: "دسترسی آسان، در هر زمان", title2: "جستجو، خرید و استرداد از طریق وب‌سایت و اپلیکیشن", image: number2 },
        { id: 3, title1: "یک سفر به‌صرفه", title2: "تضمین بهترین قیمت رزرو هتل با پشتیبانی ۲۴ ساعته", image: number3 },
    ] : (path === "/" || path === "/iranout/" || path === "/train/" || path === "/bus/" || path === "/accommodation/") ? [
        { id: 1, title1: "رتبه یک سفر", title2: "معتبرترین عرضه‌کننده محصولات گردشگری در ایران", image: number1 },
        { id: 2, title1: "همسفر هر سفر", title2: "ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)", image: number2 },
        { id: 3, title1: "همسفر همه لحظات سفر", title2: "پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر", image: number3 },
    ] : [];

    return (
        <div className="lg:pt-14 px-8 lg:px-24 mb-10 ">
            <div className="mt-5 flex justify-center flex-wrap gap-5 w-full">
                {cities.map((item) => (
                    <div key={item.id} className="border rounded-md  duration-200 w-80 lg:w-72 lg:flex-grow items-center grid grid-cols-3 gap-5 p-3 bg-white">
                        <Image src={item.image} alt="city" className="rounded-md" />
                        <div className="col-span-2 flex items-center justify-between">
                            <div className="flex flex-col gap-3">
                                <h2 className="lg:text-xl text-lg bold">{item.title1}</h2>
                                <p className="text-sm text-gray-500">{item.title2}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NumberOne;
