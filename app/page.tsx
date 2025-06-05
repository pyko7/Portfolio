import About from '@/components/about/About'
import { FC } from 'react'

const Home: FC = () => (
  <div className="w-full h-full flex gap-20 flex-col items-center justify-center lg:flex-row lg:justify-between">
    <div className="w-full lg:w-1/2">
      <About />
    </div>
    <div className="w-full flex justify-center opacity-0 animate-slowFadeIn lg:w-1/2">
      <p className="text-base sm:text-2xl">
        Build accessible content for everyone.
      </p>
    </div>
  </div>
)

export default Home
