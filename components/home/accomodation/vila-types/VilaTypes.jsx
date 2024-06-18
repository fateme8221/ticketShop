import { FaAccusoft } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GiSofa } from "react-icons/gi";
import { MdLocalHotel } from "react-icons/md";
import React from "react";

const types = [
  { id: 1, icon: <FaAccusoft />, label: "کلبه سوئیسی" },
  { id: 2, icon: <FaUmbrellaBeach />, label: "ساحلی شمال" },
  { id: 3, icon: <FaSwimmingPool />, label: "استخردار" },
  { id: 4, icon: <FaTree />, label: "جنگلی شمال" },
  { id: 5, icon: <GiSofa />, label: "سوئیت مبله" },
  { id: 6, icon: <MdLocalHotel />, label: "هاستل" },
];
const VilaTypes = () => {
  return (
    <div className="my-16">
      <h2 className="bold text-2xl mb-6">به دنبال چه نوع اقامتگاهی هستید؟</h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {types.map((type) => (
          <div
            key={type.id}
            className="flex bg-white p-5 w-[200px] lg:flex-1 flex-col items-center gap-3 border rounded-md"
          >
            <div className="text-3xl text-gray-500">{type.icon}</div>
            <h2 className="bold text-gray-800">{type.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VilaTypes;
