import EmailButton from '../IconButtons/Email'
import GithubButton from '../IconButtons/Github'
import LinkedInButton from '../IconButtons/LinkedIn'

const Icons = () => (
  <ul className="w-fit py-5 flex gap-6 bg-main-bg-color md:flex-col md:gap-8 lg:gap-10">
    <li>
      <EmailButton />
    </li>
    <li>
      <GithubButton />
    </li>
    <li>
      <LinkedInButton />
    </li>
  </ul>
)

export default Icons
