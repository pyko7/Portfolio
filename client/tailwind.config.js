/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3639",
        secondary: "#DCD7C9",
        secondaryLighten: "#E4E1D6",
        tertiary: "#3F4E4F",
        quaternary: "#A27B5C",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "75%": { opacity: 0.3 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        pageLoader: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        clockMinuteHand: {
          "100%": { transform: "rotate(360deg)" },
        },
        hideLoader: {
          "0%": { opacity: "1" },
          "50%": { opacity: ".4" },
          "100%": { opacity: "0" },
        },
        navSlide: {
          "0%": { width: "0" },
          "100%": { width: "80%" },
        },
      },
      animation: {
        slidein: "slidein 1s ease-in",
        pageLoader: "pageLoader 3s linear forwards infinite",
        hideLoader: "hideLoader 1.5s 2s ease-in",
        clockMinuteHand: "clockMinuteHand 1.5s linear infinite",
        navSlide: "navSlide .25s ease-in alternate forwards",
      },
    },
    screens: {
      xl: { max: "1199px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
