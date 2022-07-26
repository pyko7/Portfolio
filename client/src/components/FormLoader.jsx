import React from 'react';

const FormLoader = () => {
    return (
        <div className='w-full h-full flex items-center justify-center z-50'>
            <span className='w-12 h-12 inline-block border-quaternary border-t-secondary rounded-[50%] animate-clockMinuteHand ' />
        </div>
    );
};

export default FormLoader;
