'use client'
import { FC, useState } from 'react'
import Logo from '../Logo'
import Navbar from '@/components/navbar/Navbar'
import MobileNavbarMenu from '@/components/navbar/MobileNavbarMenu'

const Header: FC = () => {
  const [open, setOpen] = useState(false)
  const openProps = { open, setOpen }

  const handleClick = () => (open ? setOpen(false) : setOpen(true))

  return (
    <header className="fixed h-16 px-4 top-0 w-full flex items-center justify-between border-b-[1px] border-secondary-bg-color-light z-50 sm:px-0">
      <div className="w-1/2 p-0 h-full flex items-center z-10 lg:w-[10%] sm:w-[15%] sm:justify-center">
        <Logo />
      </div>
      <div className="block sm:hidden">
        <MobileNavbarMenu {...openProps} />
      </div>

      <Navbar />

      <div className="w-[15%] h-full hidden items-center justify-center uppercase leading-6 tracking-widest text-main-font-color sm:flex lg:w-[10%] hover:font-semibold">
        <a
          className="navbar__link--text z-10"
          href="/assets/CV_Henry_Julien.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="w-1/2 flex justify-end border-l-0 text-main-font-color sm:hidden">
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
  )
}

export default Header
