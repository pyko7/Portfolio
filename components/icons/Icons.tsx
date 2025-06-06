import { FC } from 'react'
import { generateRandomGuid } from '@/utils/_utils'
import EmailButton from '@/components/IconButtons/Email'
import GithubButton from '@/components/IconButtons/Github'
import LinkedInButton from '@/components/IconButtons/LinkedIn'

const Icons: FC = () => {
  const icons = [
    <EmailButton key={generateRandomGuid()} />,
    <GithubButton key={generateRandomGuid()} />,
    <LinkedInButton key={generateRandomGuid()} />,
  ]
  return (
    <ul className="w-fit py-5 flex gap-6 bg-main-bg-color">
      {icons.map((icon) => (
        <li key={icon.key}>{icon}</li>
      ))}
    </ul>
  )
}

export default Icons
