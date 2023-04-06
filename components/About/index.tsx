import Link from "next/link";

const Informations = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 uppercase overflow-hidden">
      <div className="w-full flex justify-center gap-4">
        <h2 className="text-6xl animate-translateToRight sm:text-4xl">
          Julien
        </h2>
        <h2 className="text-6xl animate-translateToLeft sm:text-4xl">
          Henry
        </h2>
      </div>

      <div className="w-full flex justify-center text-3xl opacity-0 animate-fastFadeIn sm:text-lg">
        <h3>Front end developer.</h3>
      </div>
      <div className="w-full -ml-[8px] flex justify-center gap-4 text-xl text-third-color opacity-0 animate-fastFadeIn sm:text-base">
        <Link
          href="/contact"
          className="hover:underline after:content-['>'] 
           after:inline-block after:pl-[4px] after:cursor-default hover:after:no-underline"
        >
          Contact
        </Link>
        <a
          href="/work"
          className="hover:underline after:content-['>'] after:inline-block after:pl-[4px] after:cursor-default hover:after:no-underline"
        >
          Work
        </a>
      </div>
    </div>
  );
};

export default Informations;
