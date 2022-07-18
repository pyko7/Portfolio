import React from 'react';
import photo from "../assets/images/photo.webp"
import ProjectContainer from '../components/ProjectContainer';

const Work = () => {
    return (
        <section id='work' className='w-full max-w-[1920px] min-h-screen my-0 mx-auto flex flex-col justify-center items-center gap-y-16'>

            <h2 className='my-8 text-4xl text-secondary font-bold sm:my-4'>My work</h2>

            <div className='w-full flex flex-col gap-y-16 md:gap-y-36 sm:gap-y-24'>
                <div className='w-full'>
                    <ProjectContainer imageName={photo} />
                </div>
                <div className='w-full'>
                    <ProjectContainer imageName={photo} reverse />
                </div>
            </div>
        </section>
    );
};

export default Work;