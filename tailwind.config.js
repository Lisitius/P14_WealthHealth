/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customGreen: "#93AD18", // remplacez par votre code couleur
      },
    },
    fontFamily: {
      custom: ["Poppins"],
    },
  },
  plugins: [],
};
