import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { PhoneIcon } from '@heroicons/react/solid'

const ContactInformations = () => {
    return (
        <ul className='w-full flex flex-col gap-y-10 items-start text-secondary text-justify'>
            <li className='w-fit flex items-center gap-x-2 text-lg'>
                <FontAwesomeIcon icon={faEnvelope} aria-label="Email me" className='w-7 h-7 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                <a href="mailto:julien.f.henry@gmail.com" target="_blank" rel='noreferrer' className='focus:outline-none'>
                    julien.f.henry@gmail.com
                </a>
            </li>
            <li className='w-fit flex items-center gap-x-2 text-lg'>
                <FontAwesomeIcon icon={faLinkedin} aria-label="My LinkedIn" className='w-7 h-7 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                <a href="https://www.linkedin.com/in/julienhenry9671" target="_blank" rel='noreferrer' className='focus:outline-none'>
                    julienhenry9671
                </a>
            </li>
            <li className='w-fit flex items-center gap-x-2 text-lg'>
                <PhoneIcon aria-label="My phone number" className='w-7 h-7 hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]' />
                +33 (0)6.26.05.10.58
            </li>
            <li className='w-fit flex items-center gap-x-2 text-lg'>
                <a href="https://github.com/pyko7" target="_blank" rel='noreferrer' className='w-fit flex items-center gap-x-2 text-lg hover:drop-shadow-[0_2px_4px_rgba(220,215,201,0.64)]'>
                <FontAwesomeIcon icon={faGithub} aria-label="My Github" className='w-7 h-7 ' />
                    Pyko7
                </a>
            </li>
        </ul>
    );
};

export default ContactInformations;

