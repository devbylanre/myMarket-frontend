/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
      colors: {
        'primary-50': 'hsl(250, 80%, 95%)',
        'primary-100': 'hsl(250, 80%, 90%)',
        'primary-200': 'hsl(250, 80%, 85%)',
        'primary-300': 'hsl(250, 80%, 80%)',
        'primary-400': 'hsl(250, 80%, 75%)',
        'primary-500': 'hsl(250, 80%, 60%)',
        'primary-600': 'hsl(250, 80%, 65%)',
        'primary-700': 'hsl(250, 80%, 50%)',
        'primary-800': 'hsl(250, 80%, 45%)',
        'primary-900': 'hsl(250, 80%, 40%)',
        'primary-950': 'hsl(250, 80%, 35%)',
      },
    },
  },
  plugins: [],
};
