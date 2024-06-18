import Companies from "@/components/home/train/companies/Companies";
import Magazine from "@/components/home/train/magazine/Magazine";
import NavigationButtons from "@/components/navigation-buttom/NavigationButtons";
import OtherServices from "@/components/home/other-sevices/OtherServices";
import Questions from "@/components/home/train/questions/Questions";
import React from "react";
import Ticket from "@/components/home/train/ticket/Ticket";
import TrainReserve from "@/components/home/train/TrainReserve";

const TrainTicket = () => {
  return (

    <div className="pt-56 lg:pt-14 px-8 lg:px-24">
      <div className="border relative mt-[-150px] rounded-lg bg-white mb-8">
        <NavigationButtons />
        <TrainReserve />
      </div>
      <OtherServices />
      <Questions />
      <Ticket />
      <Companies />
      <Magazine />
    </div>
  );
};

export default TrainTicket;
