import { GiTimeBomb } from "react-icons/gi";
import React from "react";
import Slider from "../Slider";
import { kordanVilas } from "../kordan/VilasSlider";

const FastReserve = () => {
  return (
    <>
      <div className="mb-5">
        <div className="text-[#28A745] flex items-center gap-2">
          <GiTimeBomb className="text-2xl" />
          <h2 className="bold text-xl">رزروهای آنی و قطعی</h2>
        </div>
        <p className="text-gray-600">بدون نیاز به تایید میزبان</p>
      </div>
      <Slider vilas={kordanVilas} />
    </>
  );
};

export default FastReserve;
