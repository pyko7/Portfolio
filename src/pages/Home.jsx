import React from 'react';

const Home = () => {
    return (
        <section id='home' className='w-full max-w-[1920px] min-h-screen my-0 mx-auto flex justify-center items-center md:items-start'>
            <div className='w-10/12 h-fit flex flex-col gap-y-9 text-white animate-slidein xl:ml-14 sm:mx-0 md:mt-40 sm:px-4'>
                <div className='w-fit flex flex-col gap-2.5 text-6xl sm:text-4xl'>
                    <h1>Hello, I'm <span className='text-secondary font-medium'>Julien Henry</span>.</h1>
                    <p className='text-5xl sm:text-2xl'>I'm a front end developer.</p>
                </div>
                <div className='max-w-lg text-2xl sm:text-lg'>
                    I love build accessible content to give every user a satisfying experience.
                    I am currently looking for a full remote front end developer job.
                </div>

                <a href='#' className='max-w-[220px] px-4 py-2 mt-5 text-center rounded-3xl bg-secondary text-primary text-2xl font-medium hover:bg-secondaryLighten' >See my work</a>
            </div>
        </section>
    );
};

export default Home;