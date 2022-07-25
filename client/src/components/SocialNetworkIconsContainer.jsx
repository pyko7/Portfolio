import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const SocialNetworkIconsContainer = () => {
    return (
        <ul className='w-full h-auto flex gap-x-9 justify-center items-center text-secondary'>
            <li>
                <a href="https://www.linkedin.com/in/julienhenry9671" target="_blank" rel='noreferrer' className='focus:outline-none'>
                    <FontAwesomeIcon icon={faLinkedin} aria-label="My LinkedIn" className='w-7 h-7 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                </a>
            </li>
            <li>
                <a href="https://github.com/pyko7" target="_blank" rel='noreferrer' className='focus:outline-none'>
                    <FontAwesomeIcon icon={faGithub} aria-label="My Github" className='w-7 h-7 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                </a>
            </li>
            <li>
                <a href="mailto:julien.f.henry@gmail.com" target="_blank" rel='noreferrer' className='focus:outline-none'>
                    <FontAwesomeIcon icon={faEnvelope} aria-label="Email me" className='w-7 h-7 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                </a>
            </li>
        </ul>
    );
};

export default SocialNetworkIconsContainer;