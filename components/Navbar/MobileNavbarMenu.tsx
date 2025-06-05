import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Icons from '../icons/Icons'
import CloseButton from '../IconButtons/Close'

interface drawerStateProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const MobileNavbarMenu = ({ open, setOpen }: drawerStateProps) => {
  const pathnames = ['home', 'work', 'contact']

  const handleClick = () => {
    setOpen(false)
  }

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
        <CloseButton handleClick={handleClick} />

        <nav className="w-full">
          <ul className="w-1/2 mt-28 flex flex-col justify-around gap-7">
            {pathnames.map((pathname) => (
              <li
                className="text-sm text-main-font-color no-underline uppercase leading-6 tracking-widest hover:font-semibold"
                key={pathname}
              >
                <Link
                  href={pathname === 'home' ? '/' : pathname}
                  onClick={handleClick}
                >
                  {pathname}
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <Icons />
          </div>
        </nav>
      </Transition.Child>
    </Transition>
  )
}

export default MobileNavbarMenu
