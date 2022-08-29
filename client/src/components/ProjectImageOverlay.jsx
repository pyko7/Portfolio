import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const ProjectImageOverlay = ({reverse}) => {
    return (
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center gap-x-8 bg-black/[.75] backdrop-blur-sm z-10' >
            <a href={reverse ? 'https://github.com/pyko7/Mooviz' : 'https://github.com/pyko7/P7-Groupomania'} className="w-8 h-8 flex items-center hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]">
                <FontAwesomeIcon icon={faGithub} aria-label="Github" className="h-full w-full" />
            </a>
            <a href='#' className="w-8 h-8 flex items-center hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-full w-full" />

            </a>
        </div>
    );
};

export default ProjectImageOverlay;