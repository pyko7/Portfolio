import ProjectContainer from "../Work/ProjectContainer";
import { shopIt, moviz, grouposocial } from "../../utils/builtProject";

const Work = () => {
  return (
    <section className="w-full, min-h:[100vh], pt:90, flex" id="work">
      <h2 className="fontSize: 38, mb:32"> My work </h2>
      <div>
        <ProjectContainer {...shopIt} />
        <ProjectContainer {...moviz} />
        <ProjectContainer {...grouposocial} />
      </div>
    </section>
  );
};

export default Work;
