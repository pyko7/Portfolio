import { Home as HomeSection } from "../components/Home";
import About from "../components/pages/About";
import Work from "../components/pages/Work";
import Contact from "../components/pages/Contact";

const Home = () => {
  return (
    <>
      <HomeSection />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
