import { FC } from 'react'

const About: FC = () => (
  <div
    className="w-full flex flex-col items-center justify-center gap-6 uppercase overflow-hidden"
    aria-labelledby="home-heading"
  >
    <h1
      id="home-heading"
      className="w-full flex justify-center gap-4 bg-red-500l lg:px-4"
    >
      <span className="block text-4xl sm:text-6xl lg:text-5xl xl:text-6xl">
        Julien
      </span>
      <span className="block text-4xl sm:text-6xl lg:text-5xl xl:text-6xl">
        Henry
      </span>
    </h1>

    <div className="w-full flex justify-center text-lg  sm:text-3xl lg:text-2xl xl:text-3xl">
      <h2>Full stack developer.</h2>
    </div>
  </div>
)

export default About
