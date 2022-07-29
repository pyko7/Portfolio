import React from 'react';
import photo from "../assets/images/photo.webp"
import ProjectContainer from '../components/ProjectContainer';

const Work = () => {
    return (
        <section id='work' className='w-full max-w-[1920px] min-h-screen my-0 mx-auto flex flex-col justify-center items-center gap-y-16 text-secondary md:justify-start md:gap-y-24'>

            <h2 tabIndex="0" className='text-4xl font-bold uppercase md:mt-40 sm:mt-36 '>My work</h2>

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