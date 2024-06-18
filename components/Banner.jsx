"use client";

import Image from "next/image";
import React from "react";
import allvilla from "../public/images/villa.jpg";
import bus from "../public/images/hero-824e4df4.webp";
import hotel from "../public/images/hero-8e1d56d8.webp";
import inFlight from "../public/images/hero-e1fa22fb.webp";
import outFlight from "../public/images/hero-b5a880ed.webp";
import train from "../public/images/hero-f5969150.webp";
import { usePathname } from "next/navigation";
import vila from "../public/images/hero-a654492c.webp";

const Banner = () => {
  const path = usePathname();
  const imageSrc =
    path === "/"
      ? inFlight
      : path === "/iranout/"
        ? outFlight
        : path === "/hotel/"
          ? hotel
          : path === "/train/"
            ? train
            : path === "/bus/"
              ? bus
              : path === "/accommodation/"
                ? vila
                : path === "/accommodation/all-villa/"
                  ? allvilla
                  : "";
  return (

    (path === "/" || path === "/iranout/" || path === "/hotel/" || path === "/train/" || path === "/bus/" || path === "/accommodation/" || path === "/accommodation/all-villa/")
    && <Image
      alt="banner"
      src={imageSrc}
      className={`${path !== '/accommodation/all-villa/villaId/' && 'h-96'} w-full hidden lg:block`}
    />
  );
};

export default Banner;
