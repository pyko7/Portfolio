import React from 'react';
import { Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import SocialNetworkIconsContainer from './SocialNetworkIconsContainer';


const MobileNavbarModal = ({ isOpen, setIsOpen }) => {

    return (
        <Transition appear={true} show={isOpen}>
            <Dialog open={isOpen} unmount={false} onClose={() => setIsOpen(false)}>
                {/* background opacity transition */}
                <Transition.Child
                    enter="transition-opacity ease-linear duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="hidden sm:block fixed inset-0 overflow-hidden bg-black/[.25] backdrop-blur-sm" />
                </Transition.Child>


                <Dialog.Panel>
                    <div className='hidden sm:block fixed p-5 right-0 w-60 top-0 min-h-screen bg-tertiary'>
                        {/* modal translation animation */}
                        <Transition.Child
                            enter="transition ease-in-out duration-500 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-1000 transform"
                            leaveFrom="translate-x-28"
                            leaveTo="translate-x-full"
                        >
                            {/* list opacity animation */}
                            <Transition.Child
                                enter="transition-opacity ease-linear duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className='w-full mb-16 flex justify-end'>
                                    <div className='w-10 h-10 text-secondary'>
                                        <XIcon aria-label="Close navigation modal" onClick={() => setIsOpen(false)} />
                                    </div>
                                </div>
                                <nav className='w-full px-3'>
                                    <ul className='w-full flex flex-col gap-y-4 items-start text-secondary text-lg'>
                                        <li><a href="#about" className='md:outline-none'>About</a></li>
                                        <li><a href='#work' className='md:outline-none'>Work</a></li>
                                        <li><a href='#contact' className='md:outline-none'>Contact</a></li>
                                        <li className='w-fit px-4 py-2 mt-6 rounded-3xl bg-secondary text-primary font-medium hover:bg-secondaryLighten'>
                                            <a href='#'>Resume</a>
                                        </li>
                                    </ul>
                                </nav>
                            </Transition.Child>
                        </Transition.Child>
                        <div className='fixed bottom-3 w-52'>
                            <Transition.Child
                                enter="transition ease-in-out duration-500 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-1000 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <SocialNetworkIconsContainer />
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </Transition >
    );
};

export default MobileNavbarModal;