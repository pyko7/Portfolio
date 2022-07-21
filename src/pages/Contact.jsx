import React from 'react';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactInformations from '../components/ContactInformations';
import MobileContactForm from '../components/MobileContactForm';


const Contact = () => {
    const [isShowing, setIsShowing] = useState(false)

    return (
        <section id='contact'
            className='w-full max-w-[1920px] min-h-screen my-0 mx-auto flex flex-col justify-center items-center gap-y-16 md:justify-start md:overflow-hidden md:gap-y-8'>

            <h2 className='text-4xl text-secondary font-bold uppercase'>Contact me</h2>

            <div className='w-10/12 flex items-start justify-around md:max-w-xl md:my-10 md:flex-row-reverse md:items-center md:px-6 md:gap-y-20 sm:max-w-lg'>
                <div className='w-1/2 max-w-[550px] md:hidden'>
                    <ContactForm />
                </div>
                <div className='hidden md:block md:w-full md:max-w-[550px] sm:max-w-xs'>
                    <MobileContactForm isShowing={isShowing} setIsShowing={setIsShowing} />
                </div>
                <div className='w-fit md:w-full md:max-w-lg sm:max-w-xs'>
                    <ContactInformations />
                </div>
            </div>

            <button
                className='hidden md:block md:px-4 md:py-2 md:rounded-3xl md:text-[22px] md:uppercase md:bg-secondary md:text-primary md:font-bold'
                onClick={() => setIsShowing(true)}>
                Contact me
            </button>

        </section>
    );
};

export default Contact;