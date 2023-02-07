import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";

export const Home = () => {
  return (
    <section
      className="section__container lg:px-5 sm:pt-16 sm:px-2 sm:flex-col sm:justify-around sm:items-center"
      id="home"
    >
      <div className="w-1/2 flex md:w-3/4 sm:w-full">
        <TextContainer />
      </div>

      <div className="w-1/2 flex items-center justify-center md:justify-end sm:w-full sm:justify-center">
        <ImageContainer />
      </div>
    </section>
  );
};
