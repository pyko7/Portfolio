import TextContainer from "../About/TextContainer";
import IconContainer from "../About/IconContainer";

const About = () => {
  return (
    <section
      className="section__container items-center pt-28 px-20 lg:px-12 md:flex-col md:gap-20 sm:px-2 sm:gap-12"
      id="about"
    >
      <div className="about_container relative w-full h-full py-20 px-10 flex items-center justify-between border-secondary-bg-color-light border-[1px] overflow-hidden
      lg:items-start sm:px-2 sm:flex-col sm:border-none">
        <div className="w-1/2 h-full flex md:w-full sm:justify-center">
          <TextContainer />
        </div>

        <div className="w-1/2 flex items-center px-10 justify-center md:w-full md:pr-0 sm:px-0 sm:pt-10">
          <IconContainer />
        </div>
      </div>
    </section>
  );
};

export default About;
