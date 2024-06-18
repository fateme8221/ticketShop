"use client"

import Bottom from './Bottom';
import React from 'react';
import Top from './Top';

const Footer = () => {

    return (
        <div className='section text-center lg:p-24 p-8 md:text-right bg-[#e6e6e6]'>
            <Top />
            <Bottom />
        </div>
    );
};

export default Footer;