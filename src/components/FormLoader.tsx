import React from 'react';

const FormLoader = () => {
    return (
        <div className='w-full h-full flex items-center justify-center z-50'>
            <span className='w-16 h-16 border-8 border-secondary border-t-quaternary border-w rounded-[50%] animate-clockMinuteHand ' />
        </div>
    );
};

export default FormLoader;
