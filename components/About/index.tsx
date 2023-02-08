import TextContainer from "../About/TextContainer";
import IconContainer from "../About/IconContainer";

const About = () => {
  return (
    <section
      className="section__container pt-28 px-20 lg:px-12 md:flex-col md:gap-20 sm:px-2 sm:gap-12"
      id="about"
    >
      <div className="w-1/2 flex md:w-full sm:justify-center">
        <TextContainer />
      </div>

      <div className="w-1/2 flex items-center justify-center md:w-full md:justify-end sm:justify-center">
        <IconContainer />
      </div>
    </section>
  );
};

export default About;
