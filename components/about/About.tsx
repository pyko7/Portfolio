import Link from 'next/link'
import { FC } from 'react'

const About: FC = () => (
  <div className="w-full flex flex-col items-center justify-center gap-6 uppercase overflow-hidden">
    <div className="w-full flex justify-center gap-4">
      <h2 className="text-4xl animate-translateToRight sm:text-6xl">Julien</h2>
      <h2 className="text-4xl animate-translateToLeft sm:text-6xl">Henry</h2>
    </div>

    <div className="w-full flex justify-center text-lg opacity-0 animate-fastFadeIn sm:text-3xl">
      <h3>Front end developer.</h3>
    </div>
    <div className="w-full -ml-[8px] flex justify-center gap-4 text-base text-third-color opacity-0 animate-fastFadeIn sm:text-xl">
      <Link
        href="/contact"
        className="hover:underline after:content-['>'] 
           after:inline-block after:pl-[4px] after:cursor-default hover:after:no-underline"
      >
        Contact
      </Link>
      <Link
        href="/work"
        className="hover:underline after:content-['>'] after:inline-block after:pl-[4px] after:cursor-default hover:after:no-underline"
      >
        Work
      </Link>
    </div>
  </div>
)

export default About
