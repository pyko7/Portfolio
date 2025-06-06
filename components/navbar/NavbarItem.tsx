import Link from 'next/link'
import { FC } from 'react'
import { NavbarItemProps } from './_props'

const NavbarItem: FC<NavbarItemProps> = ({ pathname }) => (
  <li
    className="text-sm text-main-font-color no-underline uppercase leading-6 tracking-widest xl:text-lg hover:font-semibold"
    key={pathname}
  >
    <Link className="block h-full" href={pathname === 'home' ? '/' : pathname}>
      {pathname}
    </Link>
  </li>
)

export default NavbarItem
