/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html", "./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        card: "url('./src/assets/images/big-shoe1.png')",
      },
      colors:{
        liteBlue: "[rgb(245 246 255)]"
      }
    },
  },
};
