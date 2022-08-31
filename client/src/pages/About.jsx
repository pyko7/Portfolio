import React from 'react';
import Image from "next/image";
import photo from "../../public/assets/images/photo.webp";
import mobilePhoto from "../../public/assets/images/mobile-photo.webp";
import SocialNetworkIconsContainer from '../components/SocialNetworkIconsContainer';
import TechnoIconsContainer from '../components/TechnoIconsContainer';

const About = () => {
    return (
        <section id='about' className='w-full min-h-screen flex flex-col justify-center items-center gap-y-16 text-secondary'>

            <h2 tabIndex="0" className='text-4xl font-bold uppercase md:mt-40'>About me</h2>

            <div className='w-full flex items-start gap-x-24 lg:px-14 lg:gap-x-10 md:max-w-xl md:flex-col-reverse md:px-6 md:gap-y-8 sm:max-w-xl sm:px-10 sm:items-center sm:gap-y-10'>

                {/* image + social network icons container */}
                <div className='w-1/2 flex flex-col items-end gap-y-5 lg:w-1/3 md:w-full md:items-center md:max-w-lg sm:max-w-xs'>
                    <div className="w-1/2 h-full min-w-[350px] lg:w-[250px] lg:min-w-[auto] sm:w-full sm:px-3" >
                        <Image src={photo}
                            layout="responsive"
                            objectFit='cover'
                            srcSet={`${photo} 500w, ${mobilePhoto} 320w`}
                            sizes="(max-width:1023px) 300px, (max-width:639px) 320px"
                            alt="julien henry" />
                    </div>
                    <div className='w-1/2 min-w-[350px] flex items-end lg:w-[250px] lg:min-w-[auto] md:hidden'>
                        <SocialNetworkIconsContainer />
                    </div>
                </div>

                {/* text container */}
                <div className='w-1/2 text-2xl text-justify xl:text-xl lg:w-2/3 md:w-full md:h-auto sm:text-xl'>
                    <div className='w-8/12 flex flex-col gap-y-10 lg:w-full md:leading-snug sm:gap-y-7'>
                        <p>Hey there, my name is Julien Henry. I live in France, more precisely in Burgundy. I’ve always been interested in computing and technology. One of my other passions is sport. After acquiring a bachelor's degree to be a physical education professor, I’ve realized that sport was just a hobby but not my future job.</p>
                        <p>After months of solo learning, I’ve decided to take the web developer training course at OpenClassrooms. Following this, I’m currently looking for my first experience as a front end developer.</p>
                        <div className='flex flex-col gap-y-6 lg:w-full'>
                            <p tabIndex="0">My toolbox:</p>
                            <TechnoIconsContainer />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;