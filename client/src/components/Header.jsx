import React, { useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNavbarModal from './MobileNavbarModal';
import SkipNavigation from "../components/SkipNavigation";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='fixed top-0 left-0 right-0 w-full max-w-[1920px] h-20 my-0 mx-auto px-14 flex justify-between items-center z-20 bg-primary sm:px-10'>
            <SkipNavigation />
            <Logo />
            <div className='sm:hidden'>
                <Navbar />
            </div>
            <div className='hidden sm:block'>
                <FontAwesomeIcon icon={faBars} className="sm:block sm:w-7 sm:h-7 sm:text-secondary" onClick={() => setIsOpen(true)} aria-label="Open navigation modal" />
                <MobileNavbarModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header>
    );
};

export default Header;