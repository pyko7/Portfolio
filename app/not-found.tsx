import Link from 'next/link'
import { FC } from 'react'

const Custom404: FC = () => (
  <section className="w-full h-full flex flex-col items-center justify-center gap-6">
    <p className="text-8xl">404</p>
    <p className="text-2xl uppercase">Page not found</p>
    <Link
      href="/"
      className="text-xl text-third-color hover:underline after:content-['>'] 
           after:inline-block after:pl-[4px] after:cursor-default hover:after:no-underline"
    >
      Accueil
    </Link>
  </section>
)

export default Custom404
