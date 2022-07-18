import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const TechnoIconsContainer = () => {
    return (
        <ul className='w-full h-auto flex flex-wrap gap-x-12 gap-y-3 justify-center items-center text-secondary'>
            <li className='flex flex-col justify-center items-center gap-y-1 text-base'>
                <FontAwesomeIcon icon={faHtml5} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                HTML5
            </li>
            <li className='flex flex-col justify-center items-center gap-y-1 text-lg'>
                <FontAwesomeIcon icon={faCss3} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                CSS3
            </li>
            <li className='flex flex-col justify-center items-center gap-y-1 text-lg'>
                <FontAwesomeIcon icon={faSass} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                SASS
            </li>
            <li className='flex flex-col justify-center items-center gap-y-1 text-lg'>
                <FontAwesomeIcon icon={faJs} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                Javascript
            </li>
            <li className='flex flex-col justify-center items-center gap-y-1 text-lg'>
                <FontAwesomeIcon icon={faReact} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5" />
                React
            </li>
            <li className='flex flex-col justify-center items-center gap-y-1 text-lg'>
                <FontAwesomeIcon icon={faNodeJs} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5"  />
                NodeJS
            </li>
            <li className='flex flex-col justify-center items-center gap-y-1 text-lg'>
                <FontAwesomeIcon icon={faGithub} className="w-auto h-8 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)] sm:h-5"  />
                Github
            </li>

        </ul>
    );
};

export default TechnoIconsContainer;