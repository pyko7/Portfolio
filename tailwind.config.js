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
    colors: {
      "main-bg-color": "#080a09",
      "main-font-color": "#ededed",
      "secondary-bg-color": "#5f5f5c",
      "secondary-bg-color-light": "#99999e",
    },
    extend: {},
  },
  plugins: [],
};
