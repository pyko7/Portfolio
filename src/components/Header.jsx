import React, { useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import { MenuAlt3Icon as MenuIcon } from '@heroicons/react/solid'
import MobileNavbarModal from './MobileNavbarModal';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='fixed top-0 left-0 right-0 w-full max-w-[1920px] h-20 my-0 mx-auto px-14 flex justify-between items-center z-20 bg-primary sm:px-10'>
            <Logo />
            <div className='sm:hidden'>
                <Navbar />
            </div>
            <div className='hidden sm:block sm:w-8 sm:h-8 sm:text-secondary'>
                <MenuIcon onClick={() => setIsOpen(true)} aria-label="Open navigation modal" />
                <MobileNavbarModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header>
    );
};

export default Header;