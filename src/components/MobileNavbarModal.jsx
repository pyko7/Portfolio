import React from 'react';
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import SocialNetworkIconsContainer from './SocialNetworkIconsContainer';


const MobileNavbarModal = ({ isOpen, setIsOpen }) => {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="hidden sm:block fixed inset-0 overflow-hidden bg-black/[.25] backdrop-blur-sm ">
                <Dialog.Panel>
                    <div className='fixed p-5 right-0 w-60 min-h-screen bg-tertiary'>
                        <div className='w-full mb-16 flex justify-end'>
                            <div className='w-10 h-10 text-secondary'>
                                <XIcon aria-label="Close navigation modal" onClick={() => setIsOpen(false)} />
                            </div>
                        </div>
                        <nav className='w-full'>
                            <ul className='w-full flex flex-col gap-y-4 items-start text-secondary text-lg'>
                                <li>About</li>
                                <li className='navItem'>Work</li>
                                <li className='navItem'>Contact</li>
                                <li className='w-fit px-4 py-2 mt-6 rounded-3xl bg-secondary text-primary font-medium hover:bg-secondaryLighten'>Resume</li>
                            </ul>
                        </nav>
                        <div className='fixed bottom-3 w-52'>
                            <SocialNetworkIconsContainer />
                        </div>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default MobileNavbarModal;