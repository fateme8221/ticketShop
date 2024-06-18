import Button from '@/components/Button';
import React from 'react';

const ConfirmAndContinue = ({next}) => {
    return (
        <div className='bg-gray-700 p-5 px-8 lg:px-24 mt-10 border flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
            <h2 className='text-white text-lg bold mb-5 lg:mb-0'>برای تایید اطلاعات,  کلیک کنید</h2>
            <Button label='تایید و ادامه و خرید' onclick={next}/>
        </div>
    );
};

export default ConfirmAndContinue;