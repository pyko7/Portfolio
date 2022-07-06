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
      },
      animation: {
        slidein: "slidein 1s ease-in",
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
