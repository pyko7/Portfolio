import React from 'react';

const SkipNavigation = () => {
    return (
        <a href='#about' className='fixed top-2 left-0 w-fit px-10 py-4 rounded-3xl text-lg font-bold text-primary bg-secondary -translate-x-[105%] z-[999] focus:translate-x-1/4 focus:bg-secondaryLighten transition-transform'>Skip to content</a>
    );
};

export default SkipNavigation;