import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section
        className="section__container relative max-w-none overflow-hidden"
        id="contact"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-screen absolute object-cover left-0 bottom-0 z-0"
        >
          <source src="assets/videos/bg.mp4" type="video/mp4" />
        </video>

        <div className="w-full max-w-[1920px] pt-28 pb-2 px-20 my-0 mx-auto flex-col z-10 sm:px-4">
          <h2 className="text-4xl sm:text-3xl"> Contact me </h2>

          <div className="w-full h-full flex justify-end items-center lg:justify-center ">
            <ContactForm />
          </div>
        </div>
      </section>
      <p className="absolute bottom-2 left-2">
        Designed and built by Julien Henry, 2023
      </p>
    </>
  );
};

export default Contact;
