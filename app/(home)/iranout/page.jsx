import FlyReserveOut from "@/components/home/flyOut/FlyReserveOut";
import NavigationButtons from "@/components/navigation-buttom/NavigationButtons";
import OtherServices from "@/components/home/other-sevices/OtherServices";
import QuestionsFly from "@/components/home/fly/questions/QuestionsFly";
import React from "react";
import ServicesSlider from "@/components/home/other-sevices/ServicesSlider";
import TicketFly from "@/components/home/fly/ticket/TicketFly";

const OutFlight = () => {
  return (
    <div className="pt-56 lg:pt-14 px-8 lg:px-24">
      <div className="gap-8 flex flex-col mb-12">
        <div className="border relative mt-[-150px] rounded-lg bg-white" >
          <NavigationButtons />
          <FlyReserveOut />
        </div>
        <OtherServices />
        <ServicesSlider />
        <QuestionsFly />
        <TicketFly />
      </div>
    </div>
  );
};

export default OutFlight;
