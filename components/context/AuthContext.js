"use client";
import { createContext, useEffect, useState } from "react";
import { FaBus } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import React from "react";
import { usePathname } from "next/navigation";
import { IoMdAirplane } from "react-icons/io";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const path = usePathname();
    const step_items = [
        {
            id: 0,
            step1: 'انتخاب',
            step2: " پرواز",
            icon: <IoMdAirplane />,
            fields: ["firstName", "lastName", "code"],
        },
        { id: 1, step1: 'مشخصات', step2: " مسافران", icon: <FaUsers /> },
        { id: 2, step1: '', step2: "تایید اطلاعات", icon: <LuMenuSquare /> },
        { id: 3, step1: '', step2: "پرداخت", icon: <FaRegCreditCard /> },
        { id: 4, step1: '', step2: "صدور بلیط", icon: <FaTicketAlt /> },
    ];
    return (
        <AuthContext.Provider value={{ step_items }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;