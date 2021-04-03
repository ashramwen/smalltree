const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F6F6F6',
          100: '#f5F5F5',
          200: '#E8E8E8',
          300: '#DBDBDB',
          400: '#929292',
          500: '#4C4C4C',
        },
        orange: {
          light: '#F7C352',
          DEFAULT: '#FB9C44',
          dark: '#F08441',
        },
      },
      fontSize: {
        12: '1.4rem',
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        28: '2.8rem',
        66: '16.5rem',
      },
      height: {
        '3px': '3px',
      },
      margin: {
        18: '4.5rem',
      },
      width: {
        68: '17rem',
        66: '16.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
