import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

const FormError = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-3 z-50 text-secondary'>
            <ExclamationCircleIcon className='w-14 h-14' />
            <p className='font-xl'>Sorry an error occurred while processing your request...</p>
        </div>
    );
};

export default FormError;
