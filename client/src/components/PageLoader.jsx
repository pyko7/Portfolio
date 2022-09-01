import React from 'react';
import SkipNavigation from './SkipNavigation';

const PageLoader = ({ setLoader }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-primary z-[100] overflow-hidden'>
            <div className='w-full h-full animate-hideLoader display flex items-center justify-center'>
                <div onClick={() => setLoader(false)}>
                    <SkipNavigation />
                </div>

                <div className="w-52 h-52 relative">
                    <div className="w-32 h-64 absolute">
                        <span className='w-52 h-52 border-t-secondary border-t-[16px] rounded-[50%] absolute top-0  animate-pageLoader drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]'></span>
                    </div>
                    <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl '>J</span>
                </div>
            </div>

        </div >
    );
};

export default PageLoader;