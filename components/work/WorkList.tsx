import { projects } from '@/utils/builtProject'
import Work from '@/components/work/Work'
import { FC } from 'react'

const WorkList: FC = () => (
  <ul className="project_animation w-full h-full px-4 flex flex-col gap-10 lg:justify-center lg:pr-[21%] ">
    {projects.map((project) => (
      <li key={project.title} className="w-full">
        <Work
          title={project.title}
          url={project.url}
          description={project.description}
          techno={project.techno}
          date={project.date}
          archived={project.archived}
        />
      </li>
    ))}
  </ul>
)

export default WorkList
