import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactInformations = () => {
    return (
        <ul className='w-full flex flex-col gap-y-10 items-start text-secondary text-justify'>
            <li>
                <a href="mailto:julien.f.henry@gmail.com" target="_blank" rel='noreferrer' aria-label="Email me" className='w-fit flex items-center gap-x-2 text-lg focus-visible:outline-items'>
                    <FontAwesomeIcon icon={faEnvelope} className='w-7 h-7 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                    julien.f.henry@gmail.com
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/julienhenry9671" target="_blank" rel='noreferrer' className='w-fit flex items-center gap-x-2 text-lg focus-visible:outline-items'>
                    <FontAwesomeIcon icon={faLinkedin} aria-hidden='false' aria-label="LinkedIn" className='w-7 h-7 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                    julienhenry9671
                </a>
            </li>
            <li className='w-fit flex items-center gap-x-2 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faPhone} aria-hidden='false' aria-label="Phone number" className='w-6 h-6 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                <span tabIndex="0" className='w-fit flex items-center gap-x-2 text-lg focus-visible:outline-items'>
                    +33 (0)6.26.05.10.58
                </span>
            </li>
            <li>
                <a href="https://github.com/pyko7" target="_blank" rel='noreferrer' className='w-fit flex items-center gap-x-2 text-lg focus-visible:outline-items'>
                <FontAwesomeIcon icon={faGithub} aria-hidden='false' aria-label="Github" className='w-6 h-6 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                Pyko7
            </a>
        </li>
        </ul >
    );
};

export default ContactInformations;

