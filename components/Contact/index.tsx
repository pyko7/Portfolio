import { useState } from "react";
import ContactForm from "./ContactForm";
import { AiOutlineClose } from "react-icons/ai";

const Contact = () => {
  const [visible, setVisible] = useState(false);
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
          className="w-full h-screen absolute object-cover left-0 bottom-0 z-0 sm:inset-0"
        >
          <source src="assets/videos/bg.mp4" type="video/mp4" />
        </video>

        {/* desktop view */}

        <div className="w-full max-w-[1920px] pb-2 px-20 my-0 mx-auto z-10 sm:hidden">
          <div className="w-full h-full flex flex-col items-start justify-start lg:gap-8">
            <h2 className="h-auto pt-28 text-4xl lg:h-auto">Contact me</h2>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[550px] py-10 flex flex-col items-center gap-8 overflow-hidden before:content-[''] before:absolute before:w-full before:h-full  before:backdrop-blur-md before:bg-black/10 before:-z-[1]  lg:max-w-lg ">
              <ContactForm />
              <p className="form__divider relative uppercase">or</p>
              <a
                href="mailto:julienhenry967@gmail.com"
                className="font-bold text-lg hover:underline"
              >
                julienhenry967@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div
          className={`{hidden  sm:w-full sm:flex sm: text-center ${
            visible ? "sm:z-50" : "sm:z-10"
          }`}
        >
          {/* Mobile view */}
          <div className="hidden sm:w-full sm:px-4 sm:flex sm:flex-col sm:items-centers sm:justify-center sm:gap-8">
            <button
              className="sm:w-full sm:max-w-xs sm:p-2 sm:bg-main-bg-color sm:text-3xl sm:mx-auto sm:my-0"
              onClick={() => setVisible(true)}
            >
              Contact me here
            </button>
            <p className="form__divider relative uppercase">or</p>
            <a
              href="mailto:julienhenry967@gmail.com"
              className="font-bold text-lg hover:underline"
            >
              julienhenry967@gmail.com
            </a>
          </div>
          {!visible ? null : (
            <div className="sm:fixed sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-4 sm:pt-12 sm:w-full sm:h-screen sm:backdrop-blur-lg sm:bg-black/10">
              <AiOutlineClose
                className="sm:fixed sm:top-5 sm:right-5 sm:w-8 sm:h-8 sm:text-main-font-color"
                onClick={() => setVisible(false)}
              />
              <ContactForm />
            </div>
          )}
        </div>
      </section>
      <p className="absolute bottom-2 left-2">
        Designed and built by Julien Henry, 2023
      </p>
    </>
  );
};

export default Contact;
