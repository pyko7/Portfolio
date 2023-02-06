const TextContainer = () => {
  return (
    <div className="w-3/4">
      <div>
        <h2 className="fontSize: 38">
          Hello, I'm
          <span style={{ fontWeight: 500 }}> Julien Henry</span>.
        </h2>
        <h3 className="fontSize: 32">I'm a front end developer.</h3>
      </div>
      <p className=" my-8,    fontSize: 22,">
        I love building accessible content to give every user a satisfying
        experience. I am currently looking for a full remote front end developer
        job.
      </p>

      <a
        href="#work"
        className=' maxWidth: "220px",
    padding: "15px",
    backgroundColor: theme.palette.secondary.main,
    fontWeight: 700,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },'
      >
        See my work
      </a>
    </div>
  );
};

export default TextContainer;
