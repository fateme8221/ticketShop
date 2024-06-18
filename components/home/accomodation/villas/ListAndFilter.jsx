import Filter from './Filter';
import React from 'react';
import Villas from './Villas';

const ListAndFilter = () => {
    return (
        <div className='grid gap-5 grid-cols-4'>
            <Filter />
            <Villas />
        </div>
    );
};

export default ListAndFilter;