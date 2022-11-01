import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const FormSuccess = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-5 z-50 text-secondary'>
            <FontAwesomeIcon icon={faCircleCheck} className='w-12 h-12' />
            <p className='text-2xl'>Your message has been sent. Thank you !</p>
        </div>
    );
};

export default FormSuccess;
