"use client";
import React, { useEffect, useState } from 'react';
import Filter from './filter/Filter';
import Flights from './Flights';

const ListAndFilter = () => {

    return (
        <div className="  lg:px-0">
            <div className='grid gap-5 grid-cols-4'>
                <Filter />
                <Flights />
            </div>
        </div>
    );
};

export default ListAndFilter;