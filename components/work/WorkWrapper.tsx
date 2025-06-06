'use client'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import WorkList from './WorkList'

const WorkWrapper: FC = () => {
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
      aria-labelledby="work-heading"
      className={`${scrollY === 0 ? 'before:opacity-0' : ''}
      ${scrollEnd ? 'after:opacity-0' : 'after:opacity-100'}
    overlay relative w-full h-full flex flex-col justify-center items-center gap-10 overflow-hidden lg:flex-row lg:justify-between`}
    >
      <div className="w-full lg:w-1/2">
        <div className="w-full flex flex-col items-center justify-center gap-6 uppercase opacity-0 animate-fadeIn">
          <h1 id="work-heading" className="text-4xl uppercase">
            My work
          </h1>
        </div>
      </div>
      <div
        ref={ref}
        className="w-full h-full flex justify-center overflow-y-auto lg:w-1/2"
        onScroll={handleScroll}
      >
        <WorkList />
      </div>
    </div>
  )
}

export default WorkWrapper
