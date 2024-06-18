import BusReserve from "@/components/home/bus/BusReserve";
import Cities from "@/components/home/bus/cities/Cities";
import Companies from "@/components/home/bus/companies/Estelam";
import NavigationButtons from "@/components/navigation-buttom/NavigationButtons";
import OtherServices from "@/components/home/other-sevices/OtherServices";
import Questions from "@/components/home/bus/questions/Questions";
import React from "react";
import ServicesSlider from "@/components/home/other-sevices/ServicesSlider";
import Ticket from "@/components/home/bus/ticket/Ticket";

const BusTicket = () => {
  return (
    <div className="pt-56 lg:pt-14 px-8 lg:px-24">
      <div className="border relative mt-[-150px] rounded-lg bg-white mb-10" >
        <NavigationButtons />
        <BusReserve />
      </div>
      <OtherServices />
      <ServicesSlider />
      <Questions />
      <Ticket />
      <Companies />
      <Cities />
    </div>
  );
};

export default BusTicket;
