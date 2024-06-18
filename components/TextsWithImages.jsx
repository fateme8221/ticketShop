import Image from "next/image";
import React from "react";

const TextsWithImages = ({ image, title, text }) => {
  return (
    <div className="grid grid-cols-4 gap-2 items-center">
      <Image
        width={90}
        height={90}
        alt="icon"
        src={image}
        className="col-span-1"
      />
      <div className="col-span-3">
        <h2 className="text-slate-800 mb-1 font-semibold">{title}</h2>
        <p className="text-slate-600 leading-6 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default TextsWithImages;
