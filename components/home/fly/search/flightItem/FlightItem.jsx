
import React, { useState } from "react";
import MoreInformation from "./MoreInformation";
import PriceSelect from "./PriceSelect";
import FlightTime from "./FlightTime";

const FlightItem = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border rounded-lg  shadow-md bg-white mb-5 overflow-hidden">
      <FlightTime open={open} setOpen={setOpen} />
      <PriceSelect open={open} setOpen={setOpen} />
      <MoreInformation open={open} setOpen={setOpen} />
    </div>
  );
};

export default FlightItem;
