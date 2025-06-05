import Link from 'next/link'
import { FC } from 'react'
import { useMobileNavbarContext } from './MobileNavbarContext'
import { MobileNavbarItemProps } from './_props'

const MobileNavbarItem: FC<MobileNavbarItemProps> = ({ pathname }) => {
  const { handleClick } = useMobileNavbarContext()

  return (
    <li
      className="text-sm text-main-font-color no-underline uppercase leading-6 tracking-widest hover:font-semibold"
      key={pathname}
    >
      <Link href={pathname === 'home' ? '/' : pathname} onClick={handleClick}>
        {pathname}
      </Link>
    </li>
  )
}

export default MobileNavbarItem
