import EmailButton from "../IconButtons/Email";
import GithubButton from "../IconButtons/Github";
import LinkedInButton from "../IconButtons/LinkedIn";

const Icons = () => {
  return (
    <ul className="w-fit py-5 flex flex-col gap-8 bg-main-bg-color lg:gap-6 md:flex-row md:gap-10">
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
  );
};

export default Icons;
