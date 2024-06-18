import Hamsafar from "./hamsafar/Hamsafar";
import Info from "./info/Info";
import React from "react";
import Royal from "./royal/Royal";
import Seyrosafar from "./seyrosafar/Seyrosafar";

const Companies = () => {
  return (
    <div className="my-24">
      <Info />
      <Royal />
      <Seyrosafar />
      <Hamsafar />
    </div>
  );
};

export default Companies;
