import Image from "next/image";
import React from "react";
import hamsafar from '../../../../../public/images/bus08-2ebb5e64.png'
import royal from '../../../../../public/images/download.png'
import seyr from '../../../../../public/images/bus07-70e4567f.png'

const items = [
  {id:1, label: 'رویال سفر ایرانیان', image: royal},
  {id:2, label: 'سیر و سفر', image: seyr},
  {id:3, label: 'همسفر', image: hamsafar},
]
const Info = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl mb-5 bold text-gray-900">شرکت‌های اتوبوس‌رانی</h2>
      <p className="text-gray-600 max-w-7xl leading-7">
        در حال حاضر، شرکت‌های اتوبوس‌رانی متعددی وجود دارند که تمام مسیرهای داخل
        و برخی از مسیرهای خارج از کشور را پوشش می‌دهند. این شرکت‌ها در بسیاری از
        امکانات و خدمات مشترک‌اند و در عین حال تفاوت‌هایی با هم دارند.
      </p>
      <p className="text-gray-600 max-w-7xl leading-7">
        زمانی که برای خرید بلیط اتوبوس جستجو می‌کنید، این شرکت‌ها گزینه‌های
        مختلفی برای شما دارند و می‌توانید با توجه به شرایط خود از بین آنها
        انتخاب کنید. در ادامه چند مورد از معروف‌ترین شرکت‌های اتوبوس‌رانی کشور
        را به شما معرفی می‌کنیم.{" "}
      </p>
      <div className="flex items-center justify-around mt-10">
        {items.map(item => 
          <div className="flex flex-col items-center justify-center gap-4" key={item.id}>
            <Image alt={item.label} src={item.image} />
            <h2 className="text-sm text-gray-800">{item.label}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
