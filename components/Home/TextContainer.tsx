const TextContainer = () => {
  return (
    <div className="relative w-full flex flex-col overflow-hidden">
      <h2
        className="absolute top-1/2 -translate-y-1/2 text-6xl"
        id="first_name"
      >
        Julien
      </h2>
      <h2 className="absolute top-1/2 -translate-y-1/2 text-6xl" id="last_name">
        Henry
      </h2>

      <h3
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-[55%] text-3xl opacity-0"
        id="third_title"
      >
        Front end developer.
      </h3>

      <a href="#work" className="max-w-[220px] p-4 border-secondary">
        See my work
      </a>
    </div>
  );
};

export default TextContainer;
