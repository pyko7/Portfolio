import { useState } from "react";

const Contact = () => {
  const [icon, setIcon] = useState(false);
  return (
    <div className="w-full h-full flex items-center justify-between overflow-hidden lg:flex-col lg:justify-center lg:gap-10">
      <div className="w-1/2 lg:w-full">
        <div className="w-full flex flex-col items-center justify-center gap-6 uppercase opacity-0 animate-fadeIn">
          <h2 className="text-4xl uppercase">Contact</h2>
        </div>
      </div>

      <div className="w-1/2 h-full flex items-center justify-center animate-fastFadeIn opacity-0 lg:w-full lg:justify-center">
        <a
          aria-label="send me an email"
          href="mailto:julienhenry967@gmail.com"
          onMouseOver={() => setIcon(true)}
          onMouseOut={() => setIcon(false)}
        >
          {!icon ? (
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          )}
        </a>
      </div>
    </div>
  );
};

export default Contact;
