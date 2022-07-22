import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

function App() {
  const [loader, setLoader] = useState(true);

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
          <Header />
          <main className="w-full flex flex-col overflow-x-hidden bg-primary md:gap-y-14">
            <Home />
            <About />
            <Work />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
