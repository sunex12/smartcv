/** @type {import('tailwindcss').Config} */

const mainColor = "#5BA8D7";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "30px",
      screens: {
        DEFAULT: "360",
      },
    },
    extend: {
      colors: {
        mainColor,
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
