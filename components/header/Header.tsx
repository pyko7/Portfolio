'use client'
import { FC } from 'react'
import Logo from '../Logo'
import Navbar from '@/components/navbar/Navbar'
import MobileNavbarMenu from '@/components/mobileNavbarMenu/MobileNavbarMenu'
import MenuIcon from '../icons/MenuIcon'
import { useMobileNavbarContext } from '../mobileNavbarMenu/MobileNavbarContext'

const Header: FC = () => {
  const { handleClick } = useMobileNavbarContext()
  return (
    <header className="fixed h-16 px-4 top-0 w-full flex items-center justify-between border-b-[1px] border-secondary-bg-color-light z-50 sm:px-0">
      <div className="w-1/2 p-0 h-full flex items-center z-10 lg:w-[10%] sm:w-[15%] sm:justify-center">
        <Logo />
      </div>

      <div className="block sm:hidden">
        <MobileNavbarMenu />
      </div>

      <Navbar />

      <div className="w-1/2 flex justify-end border-l-0 text-main-font-color sm:hidden">
        <button aria-label="menu" onClick={handleClick}>
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}

export default Header
