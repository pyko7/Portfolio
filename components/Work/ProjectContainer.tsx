import Image from "next/image";
import { Project } from "@/utils/builtProject";

type ProjectProps = {
  project: Project;
  reverse?: boolean;
};

const ProjectContainer = ({ project, reverse }: ProjectProps) => {
  return (
    <div
      className={`w-full flex ${
        reverse ? "flex-row-reverse" : ""
      } md:flex-col md:gap-y-3`}
    >
      <div className="relative w-[720px] aspect-video overflow-hidden lg:w-[680px] md:w-full">
        <Image
          fill
          src={project.image}
          alt={`${project.title} project`}
          quality={100}
          className="hover:scale-125 duration-700"
        />
      </div>

      <div
        className={`w-1/2 px-16 flex flex-col justify-center gap-8 ${
          reverse ? "lg:pr-10 lg:pl-2" : "lg:pl-10 pr-2"
        }  md:w-full md:px-1 md:gap-4`}
      >
        <a
          href={project.url}
          target="_blank"
          className="text-5xl  hover:underline lg:text-4xl"
        >
          {project.title}
        </a>
        <p>{project.description}</p>
        <div className="w-full flex gap-4 italic flex-wrap lg:gap-y-1">
          {project.techno.map((tech) => {
            return <p key={tech}>{tech}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
