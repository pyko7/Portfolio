import ContactIcons from '@/components/contactIcons/ContactIcons'
import { FC } from 'react'

const Contact: FC = () => (
  <div className="w-full h-full flex flex-col gap-10 items-center justify-center overflow-hidden lg:flex-row lg:justify-between">
    <div className="w-full lg:w-1/2 ">
      <div className="w-full flex flex-col items-center justify-center gap-6 uppercase opacity-0 animate-fadeIn">
        <h2 className="text-4xl uppercase">Contact</h2>
      </div>
    </div>

    <ContactIcons />
  </div>
)

export default Contact
