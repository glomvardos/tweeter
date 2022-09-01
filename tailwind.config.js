/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#111111",
        "primary-blue": "#2E80EC",
        "primary-text": "#D7DBDC",
        "light-blue": "#2D9CDB",
        error: "#EB5757",
      },
    },
    fontFamily: {
      sans: ["noto-sans", "sans-serif"],
    },
  },
  plugins: [],
};