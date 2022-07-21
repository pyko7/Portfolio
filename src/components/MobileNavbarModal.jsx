import React from 'react';
import { Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import SocialNetworkIconsContainer from './SocialNetworkIconsContainer';


const MobileNavbarModal = ({ isOpen, setIsOpen }) => {

    return (
        <Transition show={isOpen} >
            <Dialog onClose={() => setIsOpen(false)}>
                {/* background opacity transition */}
                <Transition.Child
                    enter="ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-linear duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="hidden sm:block fixed inset-0 overflow-hidden bg-black/[.25] backdrop-blur-sm z-50"
                />
                <Transition.Child
                    enter="ease-in-out duration-500 "
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="ease-in duration-700 delay-100"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                    className='hidden sm:block sm:fixed sm:p-5 sm:right-0 sm:w-60 sm:top-0 sm:min-h-screen sm:bg-tertiary sm:z-50'
                >
                    <Transition.Child
                        enter="ease-in-out duration-500 "
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-1000"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Panel className='w-full h-full' >
                            {/* nav list translate animation */}
                            <div className='w-full mb-16 flex justify-end'>
                                <XIcon className='w-10 h-10 text-secondary' aria-label="Close navigation modal" onClick={() => setIsOpen(false)} />
                            </div>

                            <nav className='w-full px-3'>
                                <ul className='w-full flex flex-col gap-y-4 items-start text-secondary text-lg'>
                                    <li><a href="#about" className='md:outline-none'>About</a></li>
                                    <li><a href='#work' className='md:outline-none'>Work</a></li>
                                    <li><a href='#contact' className='md:outline-none'>Contact</a></li>
                                    <li className='w-fit px-4 py-2 mt-6 rounded-3xl bg-secondary text-primary font-medium'>
                                        <a href='#'>Resume</a>
                                    </li>
                                </ul>
                            </nav>
                            <Transition.Child
                                enter="ease-in-out duration-500 "
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="ease-in duration-700 delay-500"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                                className='fixed bottom-3 w-52'
                            >
                                <SocialNetworkIconsContainer />
                            </Transition.Child>
                        </Dialog.Panel>
                    </Transition.Child>
                </Transition.Child>
            </Dialog>
        </Transition >
    );
};

export default MobileNavbarModal;