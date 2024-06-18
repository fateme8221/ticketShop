import { CgSmartHomeCooker } from "react-icons/cg";
import { FaBed } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaShower } from "react-icons/fa";
import { FaSink } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaWaterLadder } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { GiPaddles } from "react-icons/gi";
import { GiRocketThruster } from "react-icons/gi";
import { HiRadio } from "react-icons/hi2";
import { LuRefrigerator } from "react-icons/lu";
import { LuTimer } from "react-icons/lu";
import { MdDeck } from "react-icons/md";
import { MdOutlineGpsFixed } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import React from "react";
import { TbFreezeRowColumn } from "react-icons/tb";
import { TbLayoutBoardSplit } from "react-icons/tb";

const facilities = [
  { id: 1, label: "آب", icon: <FaWaterLadder /> },
  { id: 2, label: "برق", icon: <GiElectric /> },
  { id: 3, label: "گاز", icon: <CgSmartHomeCooker /> },
  { id: 4, label: "سیستم سرمایشی", icon: <PiEngineFill /> },
  { id: 5, label: "سیستم گرمایشی", icon: <PiEngineFill /> },
  { id: 6, label: "مبلمان", icon: <FaBed /> },
  { id: 7, label: "تلویزیون", icon: <MdDeck /> },
  { id: 8, label: "گیرنده دیجیتال ایران", icon: <MdDeck /> },
  { id: 9, label: "سرویس بهداشتی ایرانی", icon: <FaSink /> },
  { id: 10, label: "سرویس بهداشتی فرنگی", icon: <FaSink /> },
  { id: 11, label: "حمام", icon: <FaShower /> },
  { id: 12, label: "آشپزخانه", icon: <CgSmartHomeCooker /> },
  { id: 13, label: "یخچال", icon: <LuRefrigerator /> },
  { id: 14, label: "اجاق گاز", icon: <CgSmartHomeCooker /> },
  { id: 15, label: "وسایل پخت و پز", icon: <CgSmartHomeCooker /> },
  { id: 16, label: "لوازم سرو غذا", icon: <CgSmartHomeCooker /> },
];
const Facilities = () => {
  return (
    <div className="py-10 border-b">
      <h2 className="medium text-lg mb-6 text-gray-600">امکانات و ویژگی ها</h2>
      <div className="grid gap-3 grid-cols-[2fr_2fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
        {facilities.map((facility) => (
          <div key={facility.id} className="flex items-center text-gray-600 gap-2">
            <span>{facility.icon}</span>
            <span>{facility.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
