import React from "react";
import Slider from "../Slider";
import { kordanVilas } from "../kordan/VilasSlider";

const SuiteVilas = () => {
  return (
    <>
      <div className="mb-5">
        <h2 className="bold text-xl">سوییت و آپارتمان در تهران</h2>
        <p className="text-gray-600">
          اقامتگاه‌هایی که از مهمانان بیشترین امتیاز را دریافت کرده‌اند
        </p>
      </div>
      <Slider vilas={kordanVilas} />
    </>
  );
};

export default SuiteVilas;
