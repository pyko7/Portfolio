import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-80'>
            <ul className='w-full flex justify-around items-center text-secondary'>
                <li><a href="#about" className='md:outline-none'>About</a></li>
                <li><a href='#work' className='md:outline-none'>Work</a></li>
                <li><a href='#contact' className='md:outline-none'>Contact</a></li>
                <li className='w-fit px-4 py-2 rounded-3xl bg-secondary text-primary font-medium hover:bg-secondaryLighten'>
                    <a href='#'>Resume</a>
                </li>
            </ul>
        </nav>





    );
};

export default Navbar;