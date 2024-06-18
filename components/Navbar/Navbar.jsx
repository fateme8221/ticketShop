"use client";

import React, { createContext, useEffect, useState } from "react";
import Left from "./left/Left";
import Logo from "../Logo";
import NavLinks from "./right/NavLinks";
// import AuthPage from "../auth/AuthPage";
import useAuth from "@/stores/useAuth";

export const NavbarContext = createContext();
const Navbar = () => {

  // const { onClose, isAuth } = useAuth();
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
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
    <NavbarContext.Provider value={{ navbar }}>
      {/* {isAuth && <AuthPage />} */}
      <nav className="flex fixed  bg-[#ffffff] justify-center lg:justify-between top-0 inset-x-0 z-50 items-center  medium  border-gray-200 p-1 px-10 lg:px-24  ">
        <div className="flex items-center gap-18">
          <Logo />
          <NavLinks />
        </div>
        <Left />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
