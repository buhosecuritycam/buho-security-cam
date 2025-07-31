/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      buho: ['Montserrat', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        buhoPrimary: "#242b3f",
        buhoSecondary: "#32405a",
        buhoAccent: "#ffd600"
      }
    }
  },
  plugins: [],
}