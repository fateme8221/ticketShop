import Image from "next/image";
import { MdChevronLeft } from "react-icons/md";
import React from "react";

const Slide = ({ image, label, text, company }) => {
  return (
    <div className="rounded-lg group border overflow-hidden shadow-md hover:shadow-lg">
      <div className="w-full h-[250px] overflow-hidden">
        <Image
          className="group-hover:scale-105 duration-200"
          width={500}
          height={500}
          src={image}
          alt="news"
        />
      </div>
      {company ? (
        <div className="flex items-center justify-between p-5 text-gray-600 cursor-pointer">
          <h2 className="medium text-lg">{label}</h2>
          <MdChevronLeft  />
        </div>
      ) : (
        <div className="p-5">
          <h2 className="medium text-lg">{label}</h2>
          <p className="mt-5 text-sm text-gray-600 text-right">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Slide;
