import { FC } from 'react'
import Icons from '@/components/icons/Icons'
import MobileNavbarItem from '@/components/mobileNavbarMenu/MobileNavbarItem'
import { PATHNAMES } from '@/utils/_utils'

const MobileNavbar: FC = () => (
  <nav className="w-full" aria-label="Mobile navigation">
    <ul className="w-1/2 mt-28 flex flex-col justify-around gap-7">
      {PATHNAMES.map((pathname) => (
        <MobileNavbarItem key={pathname} pathname={pathname} />
      ))}
    </ul>
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
      aria-hidden="true"
    >
      <Icons />
    </div>
  </nav>
)

export default MobileNavbar
