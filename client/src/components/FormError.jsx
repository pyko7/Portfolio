import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const FormError = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-6 z-50 text-secondary'>
            <FontAwesomeIcon icon={faCircleExclamation} className='w-12 h-12' />
            <p className='font-xl'>Sorry an error occurred while processing your request...</p>
        </div>
    );
};

export default FormError;
