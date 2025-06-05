/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import { FC } from 'react'
import { WorkProps } from './_props'

const Work: FC<WorkProps> = ({ title, image, description, techno, url }) => (
  <div className={'w-full flex justify-end'}>
    <a
      href={url}
      target="_blank"
      className="relative w-[520px] aspect-video overflow-hidden lg:w-[680px] md:w-full"
    >
      <Image
        fill
        src={image}
        alt={`${title} project`}
        quality={100}
        className="hover:scale-110 duration-700 hover:brightness-105"
      />
    </a>
  </div>
)

export default Work
