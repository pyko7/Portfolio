import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';

const FormSuccess = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-5 z-50 text-secondary'>
            <CheckCircleIcon className='w-14 h-14' />
            <p className='text-2xl'>Your message has been sent. Thank you !</p>
        </div>
    );
};

export default FormSuccess;
