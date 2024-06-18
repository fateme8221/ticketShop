import Faq from "@/components/home/accomodation/faq/Faq";
import FastReserve from "@/components/home/accomodation/fast-reserve/FastReserve";
import NavigationButtons from "@/components/navigation-buttom/NavigationButtons";
import OtherServices from "@/components/home/other-sevices/OtherServices";
import PopularTrips from "@/components/home/accomodation/popular/PopularTrips";
import RamsarVilas from "@/components/home/accomodation/ramsar/RamsarVilas";
import React from "react";
import ReserveInfo from "@/components/home/accomodation/reserve-info/ReserveInfo";
import ServicesSlider from "@/components/home/other-sevices/ServicesSlider";
import SuiteVilas from "@/components/home/accomodation/suite/SuiteVilas";
import Tags from "@/components/home/accomodation/Tags";
import VilaItemsSlider from "@/components/home/accomodation/items/Slider";
import VilaReserve from "@/components/home/accomodation/VilaReserve";
import VilaTypes from "@/components/home/accomodation/vila-types/VilaTypes";
import VilasSlider from "@/components/home/accomodation/kordan/VilasSlider";

const Accommodation = () => {
  return (
    <div className="pt-56 lg:pt-14 px-8 lg:px-24">
      <div className="border relative mt-[-150px] rounded-lg bg-white mb-10">
        <NavigationButtons />
        <VilaReserve />
      </div>
      <OtherServices />
      <VilaItemsSlider />
      <PopularTrips />
      <ServicesSlider />
      <VilaTypes />
      <VilasSlider />
      <FastReserve />
      <SuiteVilas />
      <RamsarVilas />
      <Faq />
      <ReserveInfo />
      <Tags />
    </div>
  );
};

export default Accommodation;
