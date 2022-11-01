import Image from "next/image";
import photo from "~/public/assets/images/photo.webp";
import mobilePhoto from "~/public/assets/images/mobile-photo.webp";

export const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex justify-center items-center text-secondary md:items-start"
    >
      <div className="w-10/12 h-fit flex flex-col gap-y-9 animate-slidein xl:ml-14 md:mt-48 md:ml-0 sm:mx-0 sm:px-4">
        {/* text container */}
        <div className="w-1/2 flex flex-col gap-2.5 text-6xl md:text-5xl sm:gap-4">
          <h1>
            Hello, I'm <span className="font-medium">Julien Henry</span>.
          </h1>
          <p className="text-5xl md:text-4xl sm:text-3xl">
            I'm a front end developer.
          </p>
        </div>
        <div className="max-w-lg text-2xl text-justify sm:text-xl sm:leading-snug">
          I love building accessible content to give every user a satisfying
          experience. I am currently looking for a full remote front end
          developer job.
        </div>

        <a
          href="#work"
          className="max-w-[220px] px-4 py-2 mt-5 text-center rounded-3xl bg-secondary text-fontColor text-2xl font-medium hover:bg-secondaryLighten"
        >
          See my work
        </a>
      </div>

      {/* image container */}
      <div className="w-1/2">
        <div className="w-[350px] h-[350px] lg:w-[250px] lg:min-w-[auto] sm:w-full sm:px-3">
          {/* <Image
            src={photo}
            layout="fill"
            objectFit="cover"
            sizes="(max-width:1023px) 300px, (max-width:639px) 320px"
            className="w-full"
            alt="julien henry"
          /> */}
          <div className="w-full h-full bg-red-500"></div>
        </div>
      </div>
    </section>
  );
};
