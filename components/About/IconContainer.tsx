import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const IconContainer = () => {
  return (
    <div className="w-full md:w-3/4 sm:w-11/12">
      <h2 className="text-4xl">My toolbox</h2>
      <div className="w-full mt-10 grid grid-cols-4">
        <div aria-label="HTML5" className="toolbox_items">
          <SiHtml5 />
          <p>HTML5</p>
        </div>
        <div aria-label="CSS3" className="toolbox_items">
          <SiCss3 />
          <p>CSS3</p>
        </div>
        <div aria-label="SASS" className="toolbox_items">
          <SiSass />
          <p>SASS</p>
        </div>
        <div
          aria-label="TailwindCSS"
          className="toolbox_items border-r-main-bg-color"
        >
          <SiTailwindcss />
          <p>TailwindCSS</p>
        </div>
        <div aria-label="Javascript" className="toolbox_items ">
          <SiJavascript />
          <p>Javascript</p>
        </div>
        <div aria-label="Typescript" className="toolbox_items">
          <SiTypescript />
          <p>Typescript</p>
        </div>
        <div aria-label="React" className="toolbox_items ">
          <SiReact />
          <p>React</p>
        </div>
        <div
          aria-label="NextJS"
          className="toolbox_items border-r-main-bg-color"
        >
          <SiNextdotjs />
          <p>NextJS</p>
        </div>

        <div aria-label="MUI" className="toolbox_items">
          <SiMaterialui />
          <p>MUI</p>
        </div>
        <div aria-label="NodeJS" className="toolbox_items">
          <SiNodedotjs />
          <p>NodeJS</p>
        </div>
        <div aria-label="Firebase" className="toolbox_items">
          <SiFirebase />
          <p>Firebase</p>
        </div>
        <div
          aria-label="MongoDB"
          className="toolbox_items border-r-main-bg-color"
        >
          <SiMongodb />
          <p>MongoDB</p>
        </div>
        <div
          aria-label="MySQL"
          className="toolbox_items border-b-main-bg-color"
        >
          <SiMysql />
          <p>MySQL</p>
        </div>
        <div
          aria-label="Prisma"
          className="toolbox_items border-b-main-bg-color"
        >
          <SiPrisma />
          <p>Prisma</p>
        </div>
        <div
          aria-label="Github"
          className="toolbox_items border-b-main-bg-color"
        >
          <SiGithub />
          <p>Github</p>
        </div>
        <div
          aria-label="Figma"
          className="toolbox_items border-b-main-bg-color border-r-main-bg-color"
        >
          <SiFigma />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default IconContainer;
