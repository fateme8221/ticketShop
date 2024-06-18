import Album from "./Album";
import { FiChevronLeft } from "react-icons/fi";
import InfoAndReserve from "./InfoAndReserve";
import React from "react";

const VillaDetail = () => {
  return (
    <div className="lg:pt-20 pt-28 px-8 lg:px-24">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center mb-5 justify-between medium text-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-sm">رزرو اقامتگاه</span>
          <FiChevronLeft />
          <span className="text-sm">اقامتگاه های شهر رشت</span>
        </div>
        <span className="text-sm">کد آگهی 395806</span>
      </div>
      <Album />
      <InfoAndReserve />
    </div>
  );
};

export default VillaDetail;
