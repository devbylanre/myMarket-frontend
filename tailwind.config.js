/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
      colors: {
        primary: '#FEE715',
        secondary: '#101820',
      },
    },
  },
  plugins: [],
};
