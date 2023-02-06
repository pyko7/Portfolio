import Image from "next/image";
import { Project } from "@/utils/builtProject";

const ProjectContainer = ({
  title,
  image,
  description,
  techno,
  url,
}: Project) => {
  return (
    <div className="w-full, h-[350px], flex, flex-row, align-start">
      <Image
        src={image}
        width={350}
        height={250}
        style={{ borderRadius: 4 }}
        alt={`${title} project`}
        quality={100}
      />

      <div className="w-1/2, flex, flex-column, flex-start, px-16">
        <a href={url} target="_blank">
          {title}
        </a>
        <p className="my-16">{description}</p>
        <div aria-label="breadcrumb">
          {techno.map((tech) => {
            return (
              <p className="italic" key={tech}>
                {tech}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
