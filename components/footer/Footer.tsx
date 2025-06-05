import { FC } from 'react'
import Icons from '../icons/Icons'

const Footer: FC = () => (
  <footer className="fixed bottom-0 w-full h-20 flex items-center justify-between border-t-[1px] border-secondary-bg-color-light z-40 sm:h-16 sm:px-4">
    <div className="hidden md:w-full md:flex md:justify-center md:items-center sm:hidden">
      <Icons />
    </div>
  </footer>
)

export default Footer
