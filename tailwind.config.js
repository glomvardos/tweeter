/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2E80EC",
        "primary-text": "#4F4F4F",
        error: "#EB5757",
      },
    },
    fontFamily: {
      sans: ["noto-sans", "sans-serif"],
    },
  },
  plugins: [],
};
