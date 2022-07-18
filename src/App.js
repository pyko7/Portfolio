import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
function App() {
  return (
    <main className="w-full flex flex-col overflow-x-hidden bg-primary md:gap-y-14">
      <Header />
      <Home />
      <About />
      <Work />
    </main>
  );
}

export default App;
