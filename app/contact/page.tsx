import ContactIcons from '@/components/contactIcons/ContactIcons'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'Contact | Julien Henry – Fullstack Developer',
  description:
    'Contact Julien Henry if you want to work with an experienced fullstack developer.',
  openGraph: {
    title: 'Contact | Julien Henry – Fullstack Developer',
    description:
      'Contact Julien Henry if you want to work with an experienced fullstack developer.',
    url: 'https://julienhenry.fr/contact',
    type: 'website',
  },
  robots: 'index, follow',
}

const Contact: FC = () => (
  <div
    className="w-full h-full flex flex-col gap-10 items-center justify-center overflow-hidden lg:flex-row lg:justify-between"
    aria-labelledby="contact-heading"
  >
    <div className="w-full lg:w-1/2 ">
      <div className="w-full flex flex-col items-center justify-center gap-6 uppercase opacity-0 animate-fadeIn">
        <h1 id="contact-heading" className="text-4xl uppercase">
          Contact
        </h1>
      </div>
    </div>

    <ContactIcons />
  </div>
)

export default Contact
