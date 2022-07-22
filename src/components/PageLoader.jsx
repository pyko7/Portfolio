import React from 'react';
import SkipNavigation from './SkipNavigation';

const PageLoader = ({ setLoader }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-primary z-[100] overflow-hidden '>
            <div className='w-full h-full animate-hideLoader display flex items-center justify-center'>
                <div onClick={() => setLoader(false)}>
                    <SkipNavigation />
                </div>
                <div className='relative w-72 h-72 border-secondary border-8 rounded-[50%] '>
                    <div className='absolute top-0 left-0 w-full h-full bg-transparent animate-clockHourHand'>
                        <div className='absolute top-1/2 left-1/2 w-1/3 h-3 -translate-y-1/2 bg-secondary' />
                    </div>
                    <div className='absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-quaternary rounded-[50%] z-10' />
                    <div className='absolute top-0 left-0 w-full h-full bg-transparent animate-clockMinuteHand'>
                        <div className='absolute top-1/2 left-1/2 w-3 h-2/5 -translate-x-1/2  bg-secondary' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;

