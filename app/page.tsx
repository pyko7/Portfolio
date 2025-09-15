import About from '@/components/about/About'
import { FC } from 'react'

const Home: FC = () => (
  <div className="w-full h-full flex gap-20 flex-col items-center justify-center lg:flex-row lg:justify-between">
    <div className="w-full">
      <About />
    </div>
  </div>
)

export default Home
