"use client";

import React, { useState } from "react";
import NavSearch from "./navSearch/NavSearch";
import ListAndFilter from "./ListAndFilter";


const FlySearch = () => {

  return (
    <div className=" lg:pt-14  ">
      <NavSearch />
      <div className="lg:px-24 lg:mt-6">
        <ListAndFilter />
      </div>
    </div>
  );
};

export default FlySearch;
