import React from 'react';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactInformations from '../components/ContactInformations';
import MobileContactForm from '../components/MobileContactForm';


const Contact = () => {
    const [isShowing, setIsShowing] = useState(false)

    return (
        <section id='contact'
            className='w-full min-h-screen flex flex-col justify-center items-center gap-y-16 text-secondary md:relative md:justify-start md:overflow-hidden md:gap-y-24'>

            <h2 tabIndex="0" className='text-4xl font-bold uppercase md:mt-40'> Contact me</h2>

            <div className='w-10/12 flex items-start justify-around lg:w-11/12 lg:justify-between md:max-w-xl md:flex-row-reverse md:items-center md:px-6 sm:max-w-lg'>
                <div className='w-1/2 max-w-[550px] lg:w-3/5 lg:max-w-none md:hidden'>
                    <ContactForm />
                </div>
                <div className='hidden md:block md:w-full md:max-w-[550px] sm:max-w-xs'>
                    <MobileContactForm isShowing={isShowing} setIsShowing={setIsShowing} />
                </div>
                <div className='w-fit md:max-w-lg sm:max-w-xs'>
                    <ContactInformations />
                </div>
            </div>

            <button
                className='hidden md:absolute md:bottom-20 md:left-1/2 md:-translate-x-1/2 md:w-fit md:block md:px-4 md:py-2 md:rounded-3xl md:text-[22px] md:uppercase md:bg-secondary md:text-primary md:font-bold sm:bottom-10'
                onClick={() => setIsShowing(true)}>
                Contact me
            </button>

        </section>
    );
};

export default Contact;