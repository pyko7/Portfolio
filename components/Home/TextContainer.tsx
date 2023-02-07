import Link from "next/link";

const TextContainer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 overflow-hidden">
      <div className="w-full flex justify-center gap-4">
        <h2 className="text-6xl sm:text-4xl" id="first_name">
          Julien
        </h2>
        <h2 className="text-6xl sm:text-4xl" id="last_name">
          Henry
        </h2>
      </div>

      <div
        className="w-full flex justify-center text-3xl opacity-0 sm:text-xl"
        id="third_title"
      >
        <h3> Front end developer. </h3>
      </div>
      <div
        className="w-full -ml-[8px] flex justify-center gap-4 text-xl text-third-color opacity-0"
        id="home_links"
      >
        <Link
          href="#contact"
          className="hover:underline after:content-['>'] 
           after:inline-block after:pl-[4px] after:cursor-default hover:after:no-underline"
        >
          Contact
        </Link>
        <Link
          href="#work"
          className="hover:underline after:content-['>'] after:inline-block after:pl-[4px] after:cursor-default hover:after:no-underline"
        >
          Work
        </Link>
      </div>
    </div>
  );
};

export default TextContainer;
