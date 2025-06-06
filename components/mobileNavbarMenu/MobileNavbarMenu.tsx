import { Transition } from '@headlessui/react'
import CloseButton from '@/components/IconButtons/Close'
import MobileNavbar from '@/components/mobileNavbarMenu/MobileNavbar'
import { useMobileNavbarContext } from '@/components/mobileNavbarMenu/MobileNavbarContext'

const MobileNavbarMenu = () => {
  const { open, handleClick } = useMobileNavbarContext()

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
        onClick={handleClick}
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
        <MobileNavbar />
      </Transition.Child>
    </Transition>
  )
}

export default MobileNavbarMenu
