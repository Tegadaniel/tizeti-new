/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#30BFAB',
        },
        gray: {
          300: '#F5F5F5',
          400: '#C4C4C4',
          500: '#666666',
        },
        black: {
          300: '#333333',
          DEFAULT: '#000000',
          500: '#000000',
        },
        danger: {
          DEFAULT: '#DE3E1B',
        },
      },
      boxShadow: {
        overview: '0px 0px 12px rgba(153, 170, 187, 0.5)',
      },
    },
  },
  plugins: [],
};
