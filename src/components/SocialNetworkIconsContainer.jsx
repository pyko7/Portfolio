import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MailIcon } from '@heroicons/react/solid'




const SocialNetworkIconsContainer = () => {

    return (
        <ul className='w-full h-auto flex gap-x-5 justify-center items-center'>
            <li><SocialIcon url='https://www.linkedin.com/in/julienhenry9671/' target="_blank" style={{ height: 40, width: 40 }} bgColor='#DCD7C9' network='linkedin' label="Let's connect on linked" /></li>
            <li><SocialIcon url='https://github.com/pyko7' target="_blank" style={{ height: 40, width: 40 }} bgColor='#DCD7C9' network='github' label="My github" /></li>
            <li><SocialIcon  url='mailto:julien.f.henry@gmail.com' style={{ height: 40, width: 40 }} bgColor='#DCD7C9' network='email' label="Email me" /></li>

        </ul>
    );
};

export default SocialNetworkIconsContainer;