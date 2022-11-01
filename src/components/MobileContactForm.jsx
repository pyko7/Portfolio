import React from 'react';
import { Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';


const MobileContactForm = ({ isShowing, setIsShowing }) => {
    return (
        <>
            <Transition show={isShowing}>
                <Dialog onClose={() => setIsShowing(false)} unmount={false} className="hidden md:block">
                    {/* background opacity transition */}
                    <Transition.Child
                        enter="ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="md:block md:fixed md:inset-0 md:overflow-hidden md:bg-black/[.25] md:backdrop-blur-sm md:z-40"
                    />
                    <Transition.Child
                        enter="ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-linear duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className='fixed p-8 top-0 right-0 w-full flex justify-end z-40 sm:w-fit sm:p-4 sm:bg-black/[.25] sm:backdrop-blur-sm sm:z-50'
                    >
                        <FontAwesomeIcon icon={faXmark} tabIndex="0" className='outline-none focus:outline-items focus:p-0 md:top-0 md:right-0 md:w-10 md:h-10 md:text-secondary sm:w-fit' aria-label="Close contact form" onClick={() => setIsShowing(false)} />
                    </Transition.Child>
                    <Transition.Child
                        enter="ease-in-out duration-500 "
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="ease-in duration-500"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                        className='md:fixed md:w-full md:max-w-lg md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:z-40 sm:max-h-screen sm:overflow-scroll'
                    >
                        <Transition.Child
                            enter="ease-in-out duration-500 "
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-1000"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Panel>
                                <ContactForm />
                            </Dialog.Panel>
                        </Transition.Child>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
};

export default MobileContactForm;