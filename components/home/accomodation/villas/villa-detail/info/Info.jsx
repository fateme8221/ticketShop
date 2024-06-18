import Comments from "./Comments";
import Facilities from "./Facilities";
import React from "react";
import ReserveDate from "./ReserveDate";
import Summary from "./Summary";

const Info = () => {
  return (
    <div>
      <Summary />
      <Facilities />
      {/* <Comments /> */}
      <ReserveDate />
    </div>
  );
};

export default Info;
