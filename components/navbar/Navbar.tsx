import { PATHNAMES } from '@/utils/_utils'
import NavbarItem from '@/components/navbar/NavbarItem'
import { FC } from 'react'

const Navbar: FC = () => (
  <nav
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center"
    aria-label="Main navigation"
  >
    <ul className="hidden w-full items-center justify-center gap-10 list-none sm:flex md:gap-20">
      {PATHNAMES.map((pathname) => (
        <NavbarItem key={pathname} pathname={pathname} />
      ))}
    </ul>
  </nav>
)

export default Navbar
