"use client"
import React from 'react';

const Button = ({ label, lg, onclick, className }) => {
    return (
        <button onClick={onclick} className={`bg-[#0090cc] ${className} hover:bg-[#0174a5] duration-200 text-white rounded-md ${lg ? 'py-2 px-5 flex-grow' : 'py-1 px-4'} `}>
            {label}
        </button>
    );
};

export default Button;