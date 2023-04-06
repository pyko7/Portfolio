import About from "@/components/About";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-between lg:flex-col lg:justify-center lg:gap-20">
      <div className="w-1/2 lg:w-full sm:w-full">
        <About />
      </div>
      <div className="w-1/2 flex justify-center opacity-0 animate-slowFadeIn lg:w-full">
        <p className="text-2xl sm:text-base">
          Build accessible content for everyone.
        </p>
      </div>
    </div>
  );
};

export default Home;
