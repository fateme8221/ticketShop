import Info from './info/Info';
import React from 'react';
import Reserve from './Reserve';

const InfoAndReserve = () => {
    return (
        <div className='grid lg:grid-cols-[3fr_1fr] mt-20'>
            <Info />
            <Reserve />
        </div>
    );
};

export default InfoAndReserve;