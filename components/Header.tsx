import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Header/Navbar";
import { HiMenu } from "react-icons/hi/";
import MobileNavbarMenu from "./Header/MobileNavbarMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const openProps = { open, setOpen };

  const handleClick = () => {
    return open ? setOpen(false) : setOpen(true);
  };

  return (
    <header className=" fixed top-0 w-full h-20 flex items-center justify-between bg-black/25 backdrop-blur-sm border-b-[1px] border-secondary-bg-color-light z-50 sm:h-16">
      <div className="w-1/4 h-full flex items-center justify-center border-r-[1px] border-secondary-bg-color-light sm:w-1/2 sm:px-8 sm:justify-start sm:border-r-0">
        <Logo />
      </div>
      <div className="hidden sm:block">
        <MobileNavbarMenu {...openProps} />
      </div>

      <Navbar />

      <div className="w-1/4 h-full flex items-center justify-center border-l-[1px] border-secondary-bg-color-light uppercase leading-6 tracking-widest hover:font-semibold sm:hidden">
        <a
          className="navbar__link--text"
          href="/assets/CV_Henry_Julien.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="hidden sm:w-1/2 sm:px-8 sm:flex sm:justify-end sm:border-l-0">
        <HiMenu className="w-9 h-9" onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
