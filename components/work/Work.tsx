import { FC } from 'react'
import { WorkProps } from './_props'

const Work: FC<WorkProps> = ({
  title,
  description,
  techno,
  url,
  date,
  archived = false,
}) => (
  <div className="w-full flex flex-col gap-2 md:max-w-xl">
    <div className="w-full flex items-center gap-1 justify-end text-secondary-bg-color-light text-end font-semibold">
      <a href={url} target="_blank">
        <h2>{title}</h2>
      </a>
      <span className="text-xs">{archived ? '(archived)' : ''}</span>
      <span>/</span>
      <span>{date}</span>
    </div>

    <div className="flex flex-col gap-1 text-sm">
      <p>{description}</p>
      <span className="text-secondary-bg-color">{techno.join(' / ')}</span>
    </div>
  </div>
)

export default Work
