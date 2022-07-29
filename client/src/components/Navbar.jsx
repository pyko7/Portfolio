import React from 'react';
import Pdf from "../assets/CV_Henry_Julien.pdf"

const Navbar = () => {
    return (
        <nav className='w-96'>
            <ul className='w-full flex justify-around items-center text-secondary'>
                <li><a href="#home" className='focus-visible:outline-items'>Home</a></li>
                <li><a href="#about" className='focus-visible:outline-items'>About</a></li>
                <li><a href='#work' className='focus-visible:outline-items'>Work</a></li>
                <li><a href='#contact' className='focus-visible:outline-items'>Contact</a></li>
                <li className='w-fit px-4 py-2 rounded-3xl bg-secondary text-primary font-medium text-center hover:bg-secondaryLighten'>
                    <a href={Pdf} target='_blank' rel="noreferrer" className='focus-visible:outline-items focus-visible:outline-primary'>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;