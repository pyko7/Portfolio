import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  return (
    <section
      id="work"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-y-16 text-secondary md:justify-start md:gap-y-24"
    >
      <h2
        tabIndex={0}
        className="text-4xl font-bold uppercase md:mt-40 sm:mt-36 "
      >
        My work
      </h2>

      <div className="w-full flex flex-col gap-y-32 lg:gap-y-0 md:gap-y-36 sm:gap-y-24">
        <div className="w-full">
          {/* <ProjectContainer /> */}
        </div>
        <div className="w-full">
          <ProjectContainer reverse githubOnly />
        </div>

        <div className="w-10/12 my-0 mx-auto text-lg ">
          <a
            href="https://github.com/pyko7"
            target="_blank"
            className="w-fit flex items-center gap-x-3 hover:underline"
          >
            More on Github
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
