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
          "0%": { transform: "translateY(55%)", opacity: 0 },
          "75%": { opacity: 0.3 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        clockMinuteHand: {
          "100%": { transform: "rotate(360deg)" },
        },
        clockMinuteHand: {
          "100%": { transform: "rotate(360deg)" },
        },
        clockHourHand: {
          "100%": { transform: "rotate(60deg)" },
        },
        hideLoader: {
          "0%": { opacity: "1" },
          "50%": { opacity: ".4" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        slidein: "slidein 1s ease-in",
        clockMinuteHand: "clockMinuteHand 1.5s linear infinite",
        clockHourHand: "clockHourHand 3s linear infinite ",
        hideLoader: "hideLoader 1.5s 1.5s ease-in",
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
