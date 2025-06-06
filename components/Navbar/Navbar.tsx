import { PATHNAMES } from '@/utils/_utils'
import Link from 'next/link'

const Navbar = () => (
  <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
    <ul className="hidden w-full items-center justify-center gap-10 list-none sm:flex md:gap-20">
      {PATHNAMES.map((pathname) => (
        <li
          className="text-sm text-main-font-color no-underline uppercase leading-6 tracking-widest xl:text-lg hover:font-semibold"
          key={pathname}
        >
          <Link
            className="block h-full"
            href={pathname === 'home' ? '/' : pathname}
          >
            {pathname}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navbar
