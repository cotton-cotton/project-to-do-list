/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      black: '#262626',
      'deep-gray': '#494949',
      'middle-gray': '#7f7b7b',
      'light-gray': '#babab8',
      'main-blue': '#5c7187',
    },
    fontFamily: {
      antonio: ['Antonio', 'Arial', 'Sans-serif'],
    },
    fontSize: {
      '10px': '10px',
      '13px': '13px',
      '14px': '14px',
      '15px': '15px',
      '18px': '18px',
      '20px': '20px',
      '23px': '23px',
      '25px': '25px',
      '30px': '30px',
    },
    fontWeight: {
      thin: '300',
      regular: '400',
      'semi-bold': '600',
      bold: '700',
    },
    spacing: {
      '2px': '2px',
    },
    maxWidth: {
      '100%': '100%',
    },
    width: {
      '15%': '15%',
      '20%': '20%',
      '25%': '25%',
      '20px': '20px',
      '40px': '40px',
      '60px': '60px',
      '100px': '100px',
    },
    height: {
      '20px': '20px',
      '40px': '40px',
      '50px': '50px',
      '60px': '60px',
      '70px': '70px',
      '75px': '75px',
      '80px': '80px',
      '100px': '100px',
      '300px': '300px',
    },
    borderRadius: {
      '10px': '10px',
    },
    margin: {
      '10px': '10px',
      '20px': '20px',
    },
    padding: {
      '30px': '30px',
      '50px': '50px',
      '70px': '70px',
      '50px': '80px',
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke')],
};
