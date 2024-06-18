import { FaBed } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { IoFlash } from "react-icons/io5";
import { MdMeetingRoom } from "react-icons/md";
import React from "react";

const Summary = () => {
  return (
    <div>
      <h2 className="text-3xl heavy text-gray-800">
        اجاره ویلا سه خوابه ساحلی آرش واحد 9 بندر انزلی
      </h2>
      <div className="mt-5">
        <div className="flex gap-2 text-gray-700">
          <div className="flex bold gap-1">
            <HiUsers />
            <span> ظرفیت 10 نفر</span>
          </div>
          <span>( 6 نفر پایه + تا 4 نفر اضافه )</span>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 text-gray-600">
            <MdMeetingRoom />
            <span> 3 اتاق</span>
          </div>
          <div className="flex gap-2 text-gray-600">
            <FaBed />
            <span> 3 تخت خواب</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-10 pb-7 border-b">
        <IoFlash className="text-4xl text-green-600" />
        <div>
          <h2 className="text-green-600 bold text-xl">رزرو آنی و قطعی</h2>
          <p className="text-gray-700">
            برای رزرو نهایی این اقامتگاه نیازی به تایید از سمت میزبان نخواهید
            داشت و رزرو شما قطعی خواهد بود.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
