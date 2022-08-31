import { useState, useEffect } from "react";
import { Home as HomeSection } from "../src/pages/Home";
import About from "../src/pages/About";
import Work from "../src/pages/Work";
import Contact from "../src/pages/Contact";

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
