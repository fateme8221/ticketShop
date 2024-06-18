"use client"

import Filter from "./Filter";
import React from "react";
import TicketsList from "./TicketsList";
import useFilter from "@/stores/useFilter";

const TicketsAndFilter = () => {
  const { isBusOpen } = useFilter();
  
  return (
    <div className={`grid gap-5 ${isBusOpen ? 'lg:grid-cols-[1fr_3fr]' : 'lg:grid-cols-[4fr] xl:grid-cols-[1fr_3fr]'} `}>
      <Filter />
      <TicketsList />
    </div>
  );
};

export default TicketsAndFilter;
