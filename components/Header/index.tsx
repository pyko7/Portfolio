import { useState } from "react";
import Logo from "../Logo";
import Navbar from "@/components/Navbar";
import MobileNavbarMenu from "@/components/Navbar/MobileNavbarMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const openProps = { open, setOpen };

  const handleClick = () => {
    return open ? setOpen(false) : setOpen(true);
  };

  return (
    <header className="fixed top-0 w-full h-20 flex items-center justify-between border-b-[1px] border-secondary-bg-color-light z-50 sm:h-16 sm:px-4">
      <div className="w-[10%] p-0 h-full flex items-center justify-center z-10 lg:w-[15%] sm:w-1/2 sm:justify-start">
        <Logo />
      </div>
      <div className="hidden sm:block">
        <MobileNavbarMenu {...openProps} />
      </div>

      <Navbar />

      <div className="w-[10%] h-full flex items-center justify-center uppercase leading-6 tracking-widest text-main-font-color lg:w-[15%] hover:font-semibold sm:hidden">
        <a
          className="navbar__link--text z-10"
          href="/assets/CV_Henry_Julien.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="hidden sm:w-1/2 sm:flex sm:justify-end sm:border-l-0 sm:text-main-font-color">
        <button aria-label="menu" onClick={handleClick}>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
