/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'searchbg': "url('./src/assets/images/movies.jpg')",
      }
    },
   fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
