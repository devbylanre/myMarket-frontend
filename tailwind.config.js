/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
      colors: {
        'primary-50': 'hsl(117, 94%, 95%)',
        'primary-100': 'hsl(117, 94%, 90%)',
        'primary-200': 'hsl(117, 94%, 85%)',
        'primary-300': 'hsl(117, 94%, 80%)',
        'primary-400': 'hsl(117, 94%, 75%)',
        'primary-500': 'hsl(117, 94%, 60%)',
        'primary-600': 'hsl(117, 94%, 40%)',
        'primary-940': 'hsl(117, 94%, 35%)',
        'primary-800': 'hsl(117, 94%, 30%)',
        'primary-900': 'hsl(117, 94%, 25%)',
        'primary-950': 'hsl(117, 94%, 20%)',
      },
    },
  },
  plugins: [],
};
