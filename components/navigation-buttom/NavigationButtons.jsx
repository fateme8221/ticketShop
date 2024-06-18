"use client";

import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { IoAirplaneOutline, IoBus } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { IoMdTrain } from "react-icons/io";
import { MdOutlineHotel } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";

const routes = [
  { id: 1, name: "پرواز داخلی", icon: <GiAirplaneArrival />, route: "/" },
  {
    id: 2,
    name: "پرواز خارجی",
    icon: <GiAirplaneDeparture />,
    route: "/iranout/",
  },
  { id: 3, name: "هتل", icon: <RiHotelFill />, route: "/hotel/" },
  { id: 4, name: "قطار", icon: <IoMdTrain />, route: "/train/" },
  { id: 5, name: "ویلا", icon: <MdOutlineHotel />, route: "/accommodation/" },
  { id: 6, name: "اتوبوس", icon: <IoBus />, route: "/bus/" },
  // { id: 7, name: "تور", icon: <IoBus />, route: "/tour/" },
];
const NavigationButtons = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <ul
      className={`w-full flex flex-wrap ${navbar && "flex-nowrap lg:static sticky top-[3.75rem] z-20"
        } items-center border  duration-200 bg-white justify-evenly overflow-hidden`}
    >
      {routes.map((route) => (
        <li
          key={route.id}
          onClick={() => router.push(`${route.route}`)}
          className={`flex lg:flex-col w-[40%] lg:w-[15%] group p-2 lg:pr-0 lg:py-4 flex-grow duration-200 cursor-pointer items-center ${navbar ? "justify-center " : "pr-4"
            } border lg:border-0 ${pathname === route.route
              ? "text-[#0090cc] lg:border-b-4 lg:border-[#0090cc] bg-slate-200 lg:bg-slate-100"
              : "lg:border-white  hover:border-slate-100"
            }   lg:hover:bg-slate-100 lg:border-b-4 gap-3 text-gray-500 bold`}
        >
          <div
            className={`text-2xl lg:text-3xl ${pathname === route.route ? "text-[#0090cc]" : "text-gray-500"
              } lg:group-hover:text-[#0090cc] duration-200 `}
          >
            {route.icon}
          </div>
          <h2
            className={`${pathname === route.route && "text-[#0090cc]"} ${navbar && "hidden lg:block"
              } lg:group-hover:text-[#0090cc] duration-200`}
          >
            {route.name}
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default NavigationButtons;
