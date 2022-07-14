/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#e8e6df",
        secondaryColor: "#ef4444",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Courgette: ["Courgette", "cursive"],
        Comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};
