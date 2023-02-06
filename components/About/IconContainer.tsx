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

const IconContainer = () => {
  return (
    <div className="w-full">
      <h2 className="fontSize: 38, mb:32">My toolbox</h2>

      <div className="w-full grid m-0">
        <div>
          <div>
            <div aria-label="html 5">
              <SiHtml5 />
            </div>
            <p>HTML5</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="css 3">
              {" "}
              <SiCss3 />
            </div>
            <p>CSS3</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="sass">
              <SiSass />
            </div>
            <p>SASS</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="javascript">
              <SiJavascript />
            </div>
            <p>Javascript</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="typescript">
              <SiTypescript />
            </div>
            <p>Typescript</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="react">
              <SiReact />
            </div>
            <p>React</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="next js">
              <SiNextdotjs />
            </div>
            <p>NextJS</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="mui">
              <SiMaterialui />
            </div>
            <p>MUI</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="node js">
              <SiNodedotjs />
            </div>
            <p>NodeJS</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="github">
              <SiGithub />
            </div>
            <p>Github</p>
          </div>
        </div>

        <div>
          <div>
            <div aria-label="figma">
              {" "}
              <SiFigma />
            </div>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconContainer;
