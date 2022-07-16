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
      keyframes: {
        slideIn: {
          "100%": {
            transform: "translateY(-150px)",
          },
          "50%": {
            transform: "translateY(25px)",
          },

          "0%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
