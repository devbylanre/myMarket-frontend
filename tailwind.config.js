/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
      colors: {
        'primary-50': 'hsl(240, 70%, 90%)',
        'primary-100': 'hsl(240, 70%, 80%)',
        'primary-200': 'hsl(240, 70%, 70%)',
        'primary-300': 'hsl(240, 70%, 60%)',
        'primary-400': 'hsl(240, 70%, 55%)',
        'primary-500': 'hsl(240, 70%, 50%)',
        'primary-600': 'hsl(240, 70%, 45%)',
        'primary-700': 'hsl(240, 70%, 40%)',
        'primary-800': 'hsl(240, 70%, 35%)',
      },
    },
  },
  plugins: [],
};
