import TextContainer from "../Home/TextContainer";
import ImageContainer from "../Home/ImageContainer";

export const Home = () => {
  return (
    <section className="w-full, min-h:[100vh], pt:90, flex" id="home">
      <div className="w-1/2, flex, mt-120">
        <TextContainer />
      </div>

      <div className="w-1/2, flex, mt-120">
        <ImageContainer />
      </div>
    </section>
  );
};
