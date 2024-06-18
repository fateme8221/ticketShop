"use client";
import React from "react";
import Slider from "./Slider";

export const flightsOption = [
  {
    id: 1,
    time: "شنبه",
    price: '2100',
  },
  {
    id: 2,
    time: "یکشنبه",
    price: '2100',
  },
  {
    id: 3,
    time: "دوشنبه",
    price: '2100',
  },
  {
    id: 4,
    time: "سه شنبه",
    price: '2100',
  },
  {
    id: 5,
    time: "چهارشنبه",
    price: '2100',
  },
  {
    id: 6,
    time: "پنجشنبه",
    price: '2100',
  },
  {
    id: 7,
    time: "جمعه",
    price: '2100',
  },
  {
    id: 8,
    time: "شنبه",
    price: '2100',
  },
  {
    id: 9,
    time: "یکشنبه",
    price: '2100',
  },
  {
    id: 10,
    time: "دوشنبه",
    price: '2100',
  }
];
const Flightscalender = () => {
  return (
    <Slider flights={flightsOption} />
  );
};

export default Flightscalender;
