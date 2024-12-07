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
        },
        white: "#ffff",
        black: "#353535",
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
  ],
};
