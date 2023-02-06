import TextContainer from "../About/TextContainer";
import IconContainer from "../About/IconContainer";

const About = () => {
  return (
    <section className="w-full, min-h:[100vh], pt:90, flex" id="about">
      <div className="w-1/2, flex, mt:120">
        <TextContainer />
      </div>
      <div className="w-1/2, flex, mt:120">
        <IconContainer />
      </div>
    </section>
  );
};

export default About;
