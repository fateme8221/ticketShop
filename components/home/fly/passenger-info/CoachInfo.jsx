"use client";

import { FaUser } from "react-icons/fa";
import React, { useState } from "react";

const info = [
  { id: 1, for: "firstName", label: "  نام لاتین" },
  { id: 2, for: "lastName", label: " نام خانوادگی لاتین" },
  { id: 3, for: "lastName", label: "جنسیت" },
  { id: 4, for: "code", label: "کد ملی " },
  { id: 5, for: "lastName", label: " نام  " },
  { id: 6, for: "lastName", label: " نام خانوادگی " },
  { id: 7, for: "lastName", label: "   تاریخ تولد  " }
];
const info2 = [
  { id: 1, for: "firstName", label: "  نام لاتین" },
  { id: 2, for: "lastName", label: " نام خانوادگی لاتین" },
  { id: 3, for: "lastName", label: "جنسیت" },
  { id: 4, for: "code", label: " تاریخ تولد (میلادی) " },
  { id: 5, for: "lastName", label: " کشور محل تولد  " },
  { id: 6, for: "lastName", label: "  کشور صادر کننده پاسپورت " },
  { id: 7, for: "lastName", label: " شماره پاسپورت" },
  { id: 7, for: "lastName", label: "  تاریخ انقضا پاسپورت" }
];
const national = [
  { id: 1, label: "کارت ملی" },
  { id: 2, label: "پاسپورت" },
];

const CoachInfo = () => {
  const [nationality, setNationality] = useState("کارت ملی");
  return (
    <div className="bg-white p-3 lg:p-5 flex-1 rounded-lg shadow-lg border border-r-teal-900 border-r-[6px]">
      <div className="flex gap-3 mb-5">
        <FaUser className="text-teal-900 text-lg" />
        <h2 className="bold text-lg text-slate-800">مشخصات سرپرست</h2>
      </div>
      <div className="flex gap-3 mb-5">
        {national.map(result => (
          <div key={result.id} className="flex items-center me-4">
            <input checked={result.label === nationality} onChange={(e) => setNationality(e.target.value)} type="radio" value={result.label} name="nationality" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  " />
            <label className="ms-2 bold text-gray-900 dark:text-gray-300">{result.label}</label>
          </div>
        ))
        }
      </div>
      {
        nationality === "کارت ملی" ?
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-5">
            {info.map((item) => (
              <label key={item.id} className="relative" >
                <input required type="text" className="w-full peer p-2 medium bg-white bg-inherit border border-gray-300 focus:border-blue-500 text-slate-500 rounded-md focus:ring-0 outline-none transition duration-200" />
                <span className="absolute peer-focus:text-[0.8rem] pointer-events-none tracking-wide peer-valid:text-[0.6rem] peer-valid:-translate-y-6 top-3 right-3 px-2 text-slate-400 peer-focus:text-slate-500 peer-focus:-translate-y-[1.25rem] bg-white duration-200 ">
                  {item.label}
                </span>
              </label>
            ))
            }
          </div>
          :
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-5">
            {info2.map((item) => (
              <label key={item.id} className="relative" >
                <input required type="text" className="w-full peer p-2 medium bg-white bg-inherit border border-gray-300 focus:border-blue-500 text-slate-500 rounded-md focus:ring-0 outline-none transition duration-200" />
                <span className="absolute peer-focus:text-[0.8rem] pointer-events-none tracking-wide peer-valid:text-[0.6rem] peer-valid:-translate-y-6 top-3 right-3 px-2 text-slate-400 peer-focus:text-slate-500 peer-focus:-translate-y-[1.25rem] bg-white duration-200 ">
                  {item.label}
                </span>
              </label>
            ))
            }
          </div>
      }

    </div>
  );
};

export default CoachInfo;
