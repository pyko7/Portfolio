import { FC } from 'react'
import Icons from '../icons/Icons'
import MobileNavbarItem from './MobileNavbarItem'
import { PATHNAMES } from '@/utils/_utils'

const MobileNavbar: FC = () => (
  <nav className="w-full">
    <ul className="w-1/2 mt-28 flex flex-col justify-around gap-7">
      {PATHNAMES.map((pathname) => (
        <MobileNavbarItem key={pathname} pathname={pathname} />
      ))}
    </ul>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
      <Icons />
    </div>
  </nav>
)

export default MobileNavbar
