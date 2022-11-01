import { useState, useEffect } from "react";
import { Home as HomeSection } from "../src/pages/Home";
import About from "../src/pages/About";
import Work from "../src/pages/Work";
import Contact from "../src/pages/Contact";
import PageLoader from "../src/components/PageLoader";

const Home = () => {
  // const [loader, setLoader] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {loader ? (
        <PageLoader setLoader={setLoader} />
      ) : (
        <>
          <HomeSection />
          <About />
          <Work />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;
