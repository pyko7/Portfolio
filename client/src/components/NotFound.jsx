import React from 'react';

const NotFound = () => {
    return (
        <section className='w-full min-h-screen bg-secondary'>
            <div className='w-full h-screen flex flex-col gap-y-10 justify-center items-center text-primary '>
                <h2 className='text-5xl font-bold'>404</h2>
                <p className='text-3xl'>Oops... Page not found</p>
            </div>
        </section>
    );
};

export default NotFound;