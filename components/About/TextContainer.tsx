const TextContainer = () => {
  return (
    <div className="w-3/4 sm:w-11/12">
      <h2 className="text-4xl md:text-3xl">About me</h2>

      <div className="w-full mt-10 flex flex-col gap-10 sm:mt-6 sm:gap-6">
        <p className="text-xl">
          My name is Julien Henry. I live in France, more precisely in Burgundy.
          I’ve always been interested in computing and technology. One of my
          other passions is sport. After acquiring a bachelor's degree to be a
          physical education professor, I’ve realized that sport was just a
          hobby but not my future job.
        </p>
        <p className="text-xl">
          After months of solo learning, I’ve decided to take the web developer
          training course at OpenClassrooms. Following this, I’m open to work as
          a front end developer.
        </p>
      </div>
    </div>
  );
};

export default TextContainer;
