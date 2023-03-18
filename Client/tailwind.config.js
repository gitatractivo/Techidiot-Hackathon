/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customwhite: "#FCFEFE",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/hero.png')",
      },
    },
  },
  plugins: [],
};
