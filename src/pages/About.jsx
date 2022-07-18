import React from 'react';
import photo from "../assets/images/photo.webp"
import SocialNetworkIconsContainer from '../components/SocialNetworkIconsContainer';
import TechnoIconsContainer from '../components/TechnoIconsContainer';

const About = () => {
    return (
        <section id='about' className='w-full max-w-[1920px] min-h-screen my-0 mx-auto flex flex-col justify-center items-center gap-y-16 md:gap-y-8'>

            <h2 className='text-4xl text-secondary font-bold'>About me</h2>

            <div className='w-full flex items-start gap-x-24 lg:gap-x-14 md:max-w-xl md:flex-col-reverse md:px-6 md:gap-y-8 sm:max-w-lg  sm:items-center'>
                {/* image + social network icons container */}
                <div className='w-1/2 flex flex-col items-end gap-y-5 md:w-full md:items-center md:max-w-lg sm:max-w-xs'>
                    <img src={photo} className="w-1/2 object-contain lg:min-w-[320px] sm:w-full sm:px-3" alt="julien henry" />
                    <div className='w-1/2 flex items-end lg:min-w-[320px] md:hidden'>
                        <SocialNetworkIconsContainer />
                    </div>
                </div>

                {/* text container */}
                <div className='w-1/2 text-2xl text-secondary md:w-full md:h-auto md:text-justify sm:text-base'>
                    <div className='w-8/12 flex flex-col gap-y-10 md:w-full sm:gap-y-7'>
                        <p>Hey there, my name is Julien Henry. I live in France, more precisely in Burgundy. I’ve always been interested in computing and technology. One of my other passions is sport. After acquiring a bachelor degree to be physical education professor, I’ve realised that sport was just a hobby but not my future job.</p>
                        <p>After months of solo learning, I’ve decided to do the web developer training course at OpenClassrooms. Following this, I’m currently looking for my first experience as a front end developer.</p>
                        <div className='flex flex-col gap-y-6'>
                            <p>My toolbox:</p>
                            <TechnoIconsContainer />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;