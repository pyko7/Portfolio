import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';




const TechnoIconsContainer = () => {
    return (
        <ul className='w-full h-auto flex flex-wrap gap-x-12 gap-y-3 justify-center items-center text-secondary lg:gap-y-5 md:gap-y-6'>
            <li tabIndex="0" className='flex flex-col justify-center items-center gap-y-1 text-base focus-visible:outline-items'>
                <FontAwesomeIcon icon={faHtml5} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                HTML5
            </li>
            <li tabIndex="0" className='flex flex-col justify-center items-center gap-y-1 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faCss3} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                CSS3
            </li>
            <li tabIndex="0" className='flex flex-col justify-center items-center gap-y-1 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faSass} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                SASS
            </li>
            <li tabIndex="0" className='flex flex-col justify-center items-center gap-y-1 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faJs} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                Javascript
            </li>
            <li tabIndex="0" className='flex flex-col justify-center items-center gap-y-1 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faReact} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                React
            </li>
            <li tabIndex="0" className='flex flex-col justify-center items-center gap-y-1 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faNodeJs} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                NodeJS
            </li>
            <li tabIndex="0" className='flex flex-col justify-center items-center gap-y-1 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faGithub} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                Github
            </li>
            <li tabIndex="0" className='flex flex-col justify-center items-center gap-y-1 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faFigma} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                Figma
            </li>

        </ul>
    );
};

export default TechnoIconsContainer;