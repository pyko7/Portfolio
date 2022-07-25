import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import ProjectImageOverlay from './ProjectImageOverlay';

const ProjectContainer = ({ imageName, reverse }) => {
    const [overlay, setOverlay] = useState(false);

    const handleMouseOver = () => {
        setOverlay(true)
    }
    const handleMouseOut = () => {
        setOverlay(false)
    }

    return (
        <article className={`w-10/12 h-[350px] my-0 mx-auto flex gap-x-9 ${reverse ? "flex-row-reverse" : ""} text-secondary md:w-full md:h-auto md:max-h-[450px] md:flex-col md:justify-center md:items-center md:gap-y-9 `}>

            <div className='relative w-1/2 h-full md:w-10/12 md:max-w-xl md:px-6 sm:min-w-[280px]' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {overlay && <ProjectImageOverlay />}
                <img src={imageName} className="absolute top-0 left-0 w-full h-full object-cover md:max-h-[275px] sm:max-h-[175px]" alt='Preview of website' />
            </div>

            <div className='w-1/2 h-full flex flex-col gap-y-5 text-2xl text-justify md:w-full md:max-w-xl md:px-6 md:gap-y-8 sm:max-w-lg'>
                <h3 className='text-white'>Groupomania</h3>
                <p className='text-xl sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis deserunt quos quam aperiam illo. Pariatur deserunt assumenda soluta veritatis distinctio dolores impedit autem velit, eligendi quibusdam necessitatibus, magnam quia praesentium!</p>

                <div className={`w-full flex justify-start items-center gap-x-6 text-lg md:justify-end md:gap-x-8`}>
                    <a href='https://github.com/pyko7/P7-Groupomania' className="w-6 h-6 flex items-center hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]">
                        <FontAwesomeIcon icon={faGithub} aria-label="Github" className="h-full w-full" />
                    </a>
                    <a href='#' className="w-6 h-6 flex items-center hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]">
                        <ExternalLinkIcon aria-label="Groupomania website" className="h-full w-full" />
                    </a>
                </div>
            </div>

        </article>
    );
};

export default ProjectContainer;