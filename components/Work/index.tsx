import ProjectContainer from "../Work/ProjectContainer";
import { shopIt, moviz, grouposocial, lflPickem } from "@/utils/builtProject";

const Work = () => {
  return (
    <section
      className="section__container pt-28 px-20 flex-col mb-52 lg:px-12 lg:mb-28 sm:px-2 sm:gap-12"
      id="work"
    >
      <h2 className="text-4xl"> My work </h2>
      <div className="w-full mt-10 flex flex-col gap-10 lg:gap-14">
        <ProjectContainer project={lflPickem} />
        <ProjectContainer project={shopIt} reverse />
        <ProjectContainer project={moviz} />
        <ProjectContainer project={grouposocial} reverse />
      </div>
    </section>
  );
};

export default Work;
