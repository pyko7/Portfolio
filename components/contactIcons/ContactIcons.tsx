'use client'
import { FC, useState } from 'react'
import LetterIcon from '../icons/LetterIcon'
import SendIcon from '../icons/SendIcon'

const ContactIcons: FC = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="w-full h-full flex items-center justify-center animate-fastFadeIn opacity-0 lg:w-1/2">
      <a
        aria-label="send me an email"
        href="mailto:julienprohenry@gmail.com"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {!hovered ? <LetterIcon /> : <SendIcon />}
      </a>
    </div>
  )
}

export default ContactIcons
