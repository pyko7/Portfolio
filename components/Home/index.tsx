import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";

export const Home = () => {
  return (
    <section
      className="w-full min-h-screen pt-15 flex"
      id="home"
    >
      <div className="w-1/2 flex">
        <TextContainer />
      </div>

      <div className="w-1/2 flex mt-28">
        <ImageContainer />
      </div>
    </section>
  );
};
