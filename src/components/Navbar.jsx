import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-80'>
            <ul className='w-full flex justify-around items-center text-secondary'>
                <li>About</li>
                <li className='navItem'>Work</li>
                <li className='navItem'>Contact</li>
                <li className='w-fit px-4 py-2 rounded-3xl bg-secondary text-primary font-medium hover:bg-secondaryLighten'>Resume</li>
            </ul>

        </nav>
    );
};

export default Navbar;