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
        "hero-pattern-2": "url('./assets/hero2.jpg')",
        "hero-pattern-3": "url('./assets/hero3.png')",
      },
    },
  },
  plugins: [],
};
