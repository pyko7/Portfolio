import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMui } from "react-icons/si";
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
    <div className="w-full">
      <h2 className="text-4xl md:text-3xl">My toolbox</h2>
      <div className="w-full mt-10 grid grid-cols-4 md:grid-cols-2">
        <div className="toolbox_items">
          <SiHtml5 aria-hidden="true" />
          <p>HTML5</p>
        </div>
        <div className="toolbox_items">
          <SiCss3 aria-hidden="true" />
          <p>CSS3</p>
        </div>
        <div className="toolbox_items">
          <SiSass aria-hidden="true" />
          <p>SASS</p>
        </div>
        <div className="toolbox_items ">
          <SiTailwindcss aria-hidden="true" />
          <p>TailwindCSS</p>
        </div>
        <div className="toolbox_items ">
          <SiJavascript aria-hidden="true" />
          <p>Javascript</p>
        </div>
        <div className="toolbox_items">
          <SiTypescript aria-hidden="true" />
          <p>Typescript</p>
        </div>
        <div className="toolbox_items ">
          <SiReact aria-hidden="true" />
          <p>React</p>
        </div>
        <div className="toolbox_items ">
          <SiNextdotjs aria-hidden="true" />
          <p>NextJS</p>
        </div>

        <div className="toolbox_items">
          <SiMui aria-hidden="true" />
          <p>MUI</p>
        </div>
        <div className="toolbox_items">
          <SiNodedotjs aria-hidden="true" />
          <p>NodeJS</p>
        </div>
        <div className="toolbox_items">
          <SiFirebase aria-hidden="true" />
          <p>Firebase</p>
        </div>
        <div className="toolbox_items ">
          <SiMongodb aria-hidden="true" />
          <p>MongoDB</p>
        </div>
        <div className="toolbox_items">
          <SiMysql aria-hidden="true" />
          <p>MySQL</p>
        </div>
        <div className="toolbox_items">
          <SiPrisma aria-hidden="true" />
          <p>Prisma</p>
        </div>
        <div className="toolbox_items">
          <SiGithub aria-hidden="true" />
          <p>Github</p>
        </div>
        <div className="toolbox_items ">
          <SiFigma aria-hidden="true" />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default IconContainer;
