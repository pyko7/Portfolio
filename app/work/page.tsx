import { grouposocial, lflPickem, moviz, shopIt } from '@/utils/builtProject'
import ProjectContainer from '@/components/Work/ProjectContainer'
import { useCallback, useEffect, useRef, useState } from 'react'

const Work = () => {
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
    overlay relative w-full h-full flex items-center justify-between overflow-hidden lg:flex-col lg:justify-center lg:gap-10 `}
    >
      <div className="w-1/2 lg:w-full">
        <div className="w-full flex flex-col items-center justify-center gap-6 uppercase opacity-0 animate-fadeIn">
          <h2 className="text-4xl uppercase">My work</h2>
        </div>
      </div>

      <div
        ref={ref}
        className="w-1/2 h-full flex overflow-y-auto lg:w-full lg:justify-center"
        onScroll={handleScroll}
      >
        <ul className="project_animation w-full h-full pr-[21%] flex flex-col gap-10 lg:px-4">
          <li>
            <ProjectContainer project={lflPickem} />
          </li>
          <li>
            <ProjectContainer project={moviz} />
          </li>
          <li>
            <ProjectContainer project={shopIt} />
          </li>
          <li>
            <ProjectContainer project={grouposocial} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Work
