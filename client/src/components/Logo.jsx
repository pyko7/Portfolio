import React from 'react';

const Logo = () => {
    return (
        <div>
            <a href="#home">
                <div className="relative w-10 h-10 p-6 border-2 border-secondary rounded-full text-secondary">
                    <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl text-center'>J</span>
                </div>
            </a>
        </div >
    );
};

export default Logo;