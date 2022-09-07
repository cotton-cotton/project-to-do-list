/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'deep-gray': '#494949',
      'middle-gray': '#7f7b7b',
      'light-gray': '#babab8',
      'main-blue': '#5c7187',
    },
    // fontFamily: {},
    fontSize: {
      micro: '10px',
      small: '13px',
      regular: '14px',
      medium: '16px',
      large: '28px',
    },
    fontWeight: {
      thin: '300',
      regular: '400',
      'semi-bold': '600',
      bold: '700',
    },
  },
  plugins: [],
};
