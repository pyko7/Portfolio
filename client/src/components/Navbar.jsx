import React from 'react';
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className='w-96'>
            <ul className='w-full flex justify-around items-center gap-x-6 text-lg md:text-base text-secondary'>

                <li>
                    <Link href="/">
                        <a className='after:content-[""] after:block after:w-0 after:h-1 after:bg-quaternary after:transition-width after:duration-300 after:ease-in hover:after:w-4/5 hover:after:transition-width hover:after:duration-300 hover:after:ease-in focus-visible:outline-items'>
                            Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <a className='after:content-[""] after:block after:w-0 after:h-1 after:bg-quaternary after:transition-width after:duration-300 after:ease-in hover:after:w-4/5 hover:after:transition-width hover:after:duration-300 hover:after:ease-in focus-visible:outline-items'>
                            About</a>
                    </Link>

                </li>
                <li>
                    <Link href="#work">
                        <a className='after:content-[""] after:block after:w-0 after:h-1 after:bg-quaternary after:transition-width after:duration-300 after:ease-in hover:after:w-4/5 hover:after:transition-width hover:after:duration-300 hover:after:ease-in focus-visible:outline-items'>
                            Work</a>
                    </Link>

                </li>
                <li>
                    <Link href="#contact">

                        <a className='after:content-[""] after:block after:w-0 after:h-1 after:bg-quaternary after:transition-width after:duration-300 after:ease-in hover:after:w-4/5 hover:after:transition-width hover:after:duration-300 hover:after:ease-in focus-visible:outline-items'>
                            Contact</a>
                    </Link>

                </li>
                <li className='w-fit px-4 py-2 rounded-3xl bg-secondary text-primary font-medium text-center hover:bg-secondaryLighten'>
                    <a href="/assets/CV_Henry_Julien.pdf" target='_blank' rel="noreferrer" className='focus-visible:outline-items focus-visible:outline-primary'>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;