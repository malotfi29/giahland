/** @type {import('tailwindcss').Config} */
import { container } from "postcss";
import { fontFamily } from "tailwindcss/defaultTheme";
// import tailwindFormPlugin from "@tailwindcss/forms"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans],
      },
      colors: {
        primary: {
          900: " #417F56",
          800: "#548B66",
          700: "#679877",
          600: "#7AA588",
          500: "#8DB299",
          400: "#A0BFAA",
          300: "#B3CBBB",
          200: "#C6D8CC",
          100: "#D9E5DD",
          50: "#ECF2EE",
        },
        white: "#ffff",
        black: "#353535",
        gray:"#EDEDED",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [
    // tailwindFormPlugin({
    //   strategy: 'class', // only generate classes
    // }),
    require("tailwind-scrollbar-hide")
  ],
};
