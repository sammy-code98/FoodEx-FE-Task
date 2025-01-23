/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "chow-black": "#0E0E0E",
        "chow-white": "#FFFFFF",
        "chow-green": "#009F79",
        "chow-orange": "#D87023",
        "chow-snow": "#FFF8F2",
        "chow-blue": "#5F63E1",
        "chow-brown": {
          dark: "#49280F",
          light: "#D6D5CA",
        },
      },
      fontFamily: {
        sofia: ["Sofia Sans", "serif"],
        courgette: ["Courgette", "serif"],
      },
    },
  },
  plugins: [],
};
