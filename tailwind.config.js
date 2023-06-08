/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      blue: "#0b5cff",
      black: "#00031f",
      green: "#00ede7",
      white: "#ffffff",
    },
  },
  plugins: [],
};
