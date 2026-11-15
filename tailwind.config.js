/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        lightblack: '#20242a',
        lightred: '#d2a064',
        darkred: '#b37630',
        lightgray: '#747474',
        darkgray: '#20242a',
      },
      boxShadow: {
        'customred': '0px 0px 30px rgba(255, 82, 13, 0.21)'
      }
    },
  },
  plugins: [],
}

