/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      colors: {
        "main-bg-color": "#080a09",
        "main-font-color": "#ededed",
        "secondary-bg-color": "#5f5f5c",
        "secondary-bg-color-light": "#99999e",
        "third-color": "#ffae57",
        "third-color-lighten": "#ffce9b",
      },
      backgroundImage: {
        gradientHeader:
          "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 0) 0%,rgba(255, 255, 255, 1) 95%)",
        gradientBg:
          "linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(8, 10, 9, 1) 75%)",
        gradientBgNavbarMobile:
          "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0) 0%, rgba(255, 255, 255, 1) 95%)",
      },
      animation: {
        lightningBorder: "lightningBorder 8s linear infinite",
        lightningBorderMobile: "lightningBorderMobile 4s linear infinite",
        firstNameTranslate: "firstNameTranslate 1.25s linear forwards",
        lastNameTranslate: "lastNameTranslate 1.25s linear forwards",
        titleAppearance: "titleAppearance 0.75s ease-in forwards",
        photoTranslation: "photoTranslation 0.75s ease-out forwards",
      },
      keyframes: {
        lightningBorder: {
          "0%": {
            left: "-150px",
          },
          "50%": {
            left: " 50%",
          },
          "100%": {
            left: "110%",
          },
        },
        lightningBorderMobile: {
          "0%": {
            top: "-150px",
          },
          "50%": {
            top: "50%",
          },
          "100%": {
            top: "110%",
          },
        },
        photoTranslation: {
          "0%": {
            opacity: 0,
            transform: "translateY(350px)",
          },
          "75%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        firstNameTranslate: {
          from: {
            transform: "translateX(-300px)",
          },
          to: {
            transform: "translateX(0px)",
          },
        },
        lastNameTranslate: {
          from: {
            transform: "translateX(300px)",
          },
          to: {
            transform: "translateX(0px)",
          },
        },
        titleAppearance: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
