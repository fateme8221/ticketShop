import HotelReserve from "@/components/home/hotel/reserve/HotelReserve";
import HotelSlider from "@/components/home/hotel/HotelSlider";
import Hotels from "@/components/home/hotel/hotelCities/Hotels";
import NavigationButtons from "@/components/navigation-buttom/NavigationButtons";
import OtherServices from "@/components/home/other-sevices/OtherServices";
import QuestionsFly from "@/components/home/fly/questions/QuestionsFly";
import React from "react";
import ReserveHotel from "@/components/home/hotel/ReserveHotel";

const Hotel = () => {
  return (
    <div className="pt-56 lg:pt-14 px-8 lg:px-24">
      <div className="gap-8 flex flex-col ">
        <div className="border relative mt-[-150px] rounded-lg bg-white " >
          <NavigationButtons />
          <ReserveHotel />
        </div>
        <OtherServices />
        <HotelSlider />
        <Hotels />
        <QuestionsFly />
        <HotelReserve />
      </div>
    </div>
  );
};

export default Hotel;
