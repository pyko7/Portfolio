import React from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import SocialNetworkIconsContainer from '../components/SocialNetworkIconsContainer';

const Home = () => {
    return (
        <>
            <Header />
            <section className='w-full'>
                <div className='w-full mx-60 mt-32 flex flex-col gap-y-9 text-white sm:mx-0 sm:mt-14 sm:px-6'>
                    <div className='w-fit flex flex-col gap-2.5 text-5xl sm:text-4xl'>
                        <h1>Hello, I'm <span className='text-secondary font-medium'>Julien Henry</span>.</h1>
                        <p className='sm:text-2xl'>I'm a front end developer.</p>
                    </div>
                    <div className='max-w-lg text-xl sm:text-lg'>
                        I love build accessible content to give every user a satisfying experience.
                        I am currently looking for a full remote front end developer job.
                    </div>

                    <Link className='max-w-[220px] px-4 py-2 mt-5 text-center rounded-3xl bg-secondary text-primary text-2xl font-medium hover:bg-secondaryLighten' to="/" >See my work</Link>
                </div>
                <div className='absolute bottom-3 left-0 right-0'>
                    <SocialNetworkIconsContainer />
                </div>
            </section>
        </>
    );
};

export default Home;