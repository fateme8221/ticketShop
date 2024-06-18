import Image from "next/image";
import React from "react";
import image1 from "../../../../../public/images/a2ae80e0-4f34-4096-96cd-536aba46b494.jpeg";
import image2 from "../../../../../public/images/48f854cb-1b4f-4622-ae1c-8f5a6d1f7a81.jpeg";
import image3 from "../../../../../public/images/4626f027-bee4-4e1d-9415-ef0738521c56.jpeg";
import image4 from "../../../../../public/images/efcc3fe1-d312-4d2a-9cb5-4ce758389515.jpeg";
import image5 from "../../../../../public/images/51afc4a7-2ed9-4ea9-bfc9-95dc499896a4.jpeg";

const Album = () => {
  return (
    <div className="grid gap-1 lg:grid-cols-2 rounded-xl overflow-hidden">
      <div>
        <Image className="w-full h-[200px] lg:h-[404px]" src={image1} alt="villa" />
      </div>
      <div className="grid lg:grid-cols-2 gap-1">
        <Image className="w-full h-[200px]" src={image2} alt="villa" />
        <Image className="w-full h-[200px]" src={image3} alt="villa" />
        <Image className="w-full h-[200px]" src={image4} alt="villa" />
        <Image className="w-full h-[200px]" src={image5} alt="villa" />
      </div>
    </div>
  );
};

export default Album;
