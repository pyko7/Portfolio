'use client'
import { grouposocial, lflPickem, moviz, shopIt } from '@/utils/builtProject'
import Work from '@/components/work/Work'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

const WorkPage: FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollEnd, setScrollEnd] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    if (!ref.current) {
      return
    }
    setScrollY(ref.current.scrollTop)
    if (
      Math.floor(ref.current.scrollHeight - ref.current.scrollTop) <=
      ref.current.offsetHeight
    ) {
      setScrollEnd(true)
    } else {
      setScrollEnd(false)
    }
  }, [])

  useEffect(() => {
    handleScroll()
  }, [handleScroll])

  return (
    <div
      className={`${scrollY === 0 ? 'before:opacity-0' : ''}
      ${scrollEnd ? 'after:opacity-0' : 'after:opacity-100'}
    overlay relative w-full h-full flex flex-col justify-center items-center gap-10 overflow-hidden lg:flex-row lg:justify-between`}
    >
      <div className="w-full lg:w-1/2">
        <div className="w-full flex flex-col items-center justify-center gap-6 uppercase opacity-0 animate-fadeIn">
          <h2 className="text-4xl uppercase">My work</h2>
        </div>
      </div>

      <div
        ref={ref}
        className="w-full h-full flex justify-center overflow-y-auto lg:w-1/2"
        onScroll={handleScroll}
      >
        {/* TODO: MAP */}
        <ul className="project_animation w-full h-full px-4 flex flex-col gap-10 lg:pr-[21%]">
          <li>
            <Work
              title={lflPickem.title}
              image={lflPickem.image}
              url={lflPickem.url}
              description={lflPickem.description}
              techno={lflPickem.techno}
            />
          </li>
          <li>
            <Work
              title={moviz.title}
              image={moviz.image}
              url={moviz.url}
              description={moviz.description}
              techno={moviz.techno}
            />
          </li>
          <li>
            <Work
              title={shopIt.title}
              image={shopIt.image}
              url={shopIt.url}
              description={shopIt.description}
              techno={shopIt.techno}
            />
          </li>
          <li>
            <Work
              title={grouposocial.title}
              image={grouposocial.image}
              url={grouposocial.url}
              description={grouposocial.description}
              techno={grouposocial.techno}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WorkPage
