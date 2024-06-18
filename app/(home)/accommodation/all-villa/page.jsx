import Faq from "@/components/home/accomodation/faq/Faq";
import Info from "@/components/home/accomodation/villas/Info";
import ListAndFilter from "@/components/home/accomodation/villas/ListAndFilter";
import React from "react";
import Tags from "@/components/home/accomodation/Tags";
import VilaReserve from "@/components/home/accomodation/VilaReserve";

const AllVilla = () => {
  return (
    <main className="pt-56 lg:pt-14 px-8 lg:px-24">
      <div className="relative lg:mt-[-190px] pt-5 border rounded-xl bg-white mb-10">
        <h2 className="text-center bold text-3xl py-5">اجاره ویلا</h2>
        <VilaReserve />
      </div>
      <ListAndFilter />
      <Info />
      <Faq />
      <Tags />
    </main>
  );
};

export default AllVilla;
