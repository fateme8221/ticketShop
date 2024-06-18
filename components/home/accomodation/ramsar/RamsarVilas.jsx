import React from "react";
import Slider from "../Slider";
import { kordanVilas } from "../kordan/VilasSlider";

const RamsarVilas = () => {
  return (
    <>
      <div className="mb-5">
        <h2 className="bold text-xl">ویلا در رامسر</h2>
      </div>
      <Slider vilas={kordanVilas} />
    </>
  );
};

export default RamsarVilas;
