/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#2e7d32",
          light: "#60ad5e",
          dark: "#1b5e20",
        },
        secondary: {
          default: "#a5d6a7",
          light: "#e8f5e9",
          dark: "#66bb6a",
        },
      },
    },
  },
  plugins: [],
});
