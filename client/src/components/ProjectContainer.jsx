import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ProjectImageOverlay from './ProjectImageOverlay';
import grouposocialThumbnail from "../assets/images/grouposocial.webp"
import movizThumbnail from "../assets/images/moviz.webp"

const ProjectContainer = ({ reverse, githubOnly }) => {
    const [overlay, setOverlay] = useState(false);

    const handleMouseOver = () => {
        setOverlay(true)
    }
    const handleMouseOut = () => {
        setOverlay(false)
    }

    return (
        <article className={`w-10/12 h-[350px] my-0 mx-auto flex gap-x-9 ${reverse ? "flex-row-reverse" : ""} text-secondary md:w-full md:h-auto md:max-h-[450px] md:flex-col md:justify-center md:items-center md:gap-y-5 `}>

            <div className='relative w-1/2 h-full md:static md:w-10/12 md:max-w-xl md:px-6 sm:min-w-[280px] sm:px-0' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {overlay && <ProjectImageOverlay reverse={reverse} githubOnly={githubOnly} />}
                <img src={!reverse ? movizThumbnail : grouposocialThumbnail} className="absolute top-0 left-0 w-full h-full object-cover md:static md:max-h-[275px]" alt='Preview of website' />
            </div>

            <div className='w-1/2 h-full flex flex-col gap-y-5 text-2xl text-justify xl:text-xl md:w-full md:max-w-xl md:px-6 md:gap-y-4 sm:w-full'>
                <h3 tabIndex="0" className='text-white'>{!reverse ? "Moviz" : "Groupomania"}</h3>
                {!reverse ?
                    <div>
                        <p className='text-xl xl:text-lg text-white sm:text-lg'>On Moviz you can find your next movie. The most popular or by genre, the choice is yours.</p>
                        <p className='mt-2 word-spacing-1 text-lg xl:text-base italic lg:text-base '>NextJS <span className='word-spacing-0'>Tailwind CSS</span> <span className='word-spacing-0'>The Movie Database API</span> Vercel</p>
                    </div> :
                    <div>
                        <p className='text-xl xl:text-lg text-white sm:text-lg'>Grouposocial is a social network built for a fictional company. The users can post their thoughts and interact with each other.</p>
                        <p className='mt-2 word-spacing-1 text-lg xl:text-base italic lg:text-base'>React  SASS  Express  MySQL</p>
                    </div>
                }

                <div className={`w-full flex justify-start items-center gap-x-6 text-lg md:justify-end md:gap-x-8`}>
                    <a href={!reverse ? 'https://github.com/pyko7/Mooviz' : 'https://github.com/pyko7/P7-Groupomania'} target="_blank" aria-label="Github" className="w-6 h-6 flex items-center hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] focus-visible:outline-items focus-visible:p-0">
                        <FontAwesomeIcon icon={faGithub} className="h-full w-full" />
                    </a>
                    {!githubOnly ?
                        <a href='https://moviz.vercel.app/' target="_blank" aria-label="Groupomania website" className="w-6 h-6 flex items-center hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] focus-visible:outline-items focus-visible:p-0">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-full w-full" />
                        </a> : null
                    }
                </div>
            </div>

        </article>
    );
};

export default ProjectContainer;