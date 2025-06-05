import Image from 'next/image'
import { Project } from '@/utils/builtProject'

type ProjectProps = {
  project: Project;
};

const ProjectContainer = ({ project }: ProjectProps) => (
    <div className={'w-full flex justify-end'}>
      <a
        href={project.url}
        target="_blank"
        className="relative w-[520px] aspect-video overflow-hidden lg:w-[680px] md:w-full"
      >
        <Image
          fill
          src={project.image}
          alt={`${project.title} project`}
          quality={100}
          className="hover:scale-110 duration-700 hover:brightness-105"
        />
      </a>
    </div>
  )

export default ProjectContainer
