import Link from 'next/link'
import { FC } from 'react'
import { AboutLinkProps } from './_props'

const AboutLink: FC<AboutLinkProps> = ({ url, label }) => (
  <Link
    href={url}
    className="hover:underline after:content-['>'] 
           after:inline-block after:pl-[4px] after:cursor-default hover:after:no-underline"
  >
    {label}
  </Link>
)

export default AboutLink
