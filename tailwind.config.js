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
        gradientDark:
          "linear-gradient(0deg, rgba(8,10,9,1) 10%, rgba(8,10,9,0) 100%)",
      },
      animation: {
        lightningBorder: "lightningBorder 8s linear infinite",
        lightningBorderToRight: "lightningBorderToRight 8s linear infinite",
        lightningBorderToLeft: "lightningBorderToLeft 8s linear infinite",
        lightningBorderToBottom: "lightningBorderToBottom 4s linear infinite",

        translateToRight: "translateToRight 1.25s linear forwards",
        translateToLeft: "translateToLeft 1.25s linear forwards",
        slideToLeftWithFadeIn: "slideToLeftWithFadeIn 0.75s 1s ease-out forwards",

        fastFadeIn: "fadeIn 0.75s 1.5s ease-in forwards",
        slowFadeIn: "fadeIn 0.75s 2s ease-in forwards",
        fadeIn: "fadeIn 0.75s 0.5s ease-in forwards",
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
        lightningBorderToRight: {
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
        lightningBorderToLeft: {
          "0%": {
            right: "-150px",
          },
          "50%": {
            right: " 50%",
          },
          "100%": {
            right: "110%",
          },
        },
        lightningBorderToBottom: {
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
        translateToRight: {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        translateToLeft: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        slideToLeftWithFadeIn: {
          from: {
            transform: "translateX(100%)",
            opacity: 0,
          },
          to: {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
