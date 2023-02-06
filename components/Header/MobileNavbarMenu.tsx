import { Transition } from "@headlessui/react";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";

interface drawerStateProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileNavbarMenu = ({ open, setOpen }: drawerStateProps) => {
  const pathnames = ["#home", "#about", "#work", "#contact", "resume"];

  const handleClick = () => {
    return setOpen(false);
  };

  return (
    <Transition show={open}>
      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-90"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-90"
        leaveTo="opacity-0"
        className="fixed top-0 left-0 w-full h-screen bg-main-bg-color opacity-90 z-[100]"
      />
      <Transition.Child
        enter="ease-in-out duration-500 "
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="ease-in duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        id="mobile_navbar"
        className="fixed top-0 right-0 w-72 min-h-screen px-11 backdrop-blur-md border-l-[1px]
          border-l-secondary-bg-color-light z-[101]"
      >
        <HiOutlineX
          className="absolute top-5 right-5 w-9 h-9 text-main-font-color"
          onClick={handleClick}
        />

        <nav className="w-full">
          <ul className="w-1/2 mt-28 flex flex-col justify-around gap-7">
            {pathnames.map((pathname) => {
              return pathname === "resume" ? (
                <li
                  className="text-sm text-main-font-color no-underline uppercase leading-6 tracking-widest hover:font-semibold"
                  key={pathname}
                >
                  <a
                    href="/assets/CV_Henry_Julien.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleClick}
                  >
                    Resume
                  </a>
                </li>
              ) : (
                <li
                  className="text-sm text-main-font-color no-underline uppercase leading-6 tracking-widest hover:font-semibold"
                  key={pathname}
                >
                  <Link href={pathname} onClick={handleClick}>
                    {pathname.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Transition.Child>
    </Transition>
  );
};

export default MobileNavbarMenu;
