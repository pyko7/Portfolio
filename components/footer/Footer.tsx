import { FC } from 'react'
import Icons from '../icons/Icons'

const Footer: FC = () => (
  <footer className="fixed bottom-0 w-full h-16 px-4 flex items-center justify-between border-t-[1px] border-secondary-bg-color-light z-40 sm:h-20 sm:px-0">
    <div className="w-full flex justify-center items-center">
      <Icons />
    </div>
  </footer>
)

export default Footer
