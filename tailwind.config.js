/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ivy': ['Ivypresto-Display', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif']
      },
      colors: {
        'black': {
          100: '#161615',
        },
        'beige': {
          light: '#FDFCF8',
          DEFAULT: '#F9F6F2',
          dark: '#ECE8D8'
        },
      },
      fontSize: {
        'title': '1.4375rem',
        'work': '0.5625rem',
        'about': '5rem',
        'description': '1.0625rem',
        'moreabout': '1.1875rem',
        'insta': '1.625rem',
        'footer': '1.3125rem',
        'offer': '2.0625rem',
        'personal': '2.6875rem'
      },
      lineHeight: {
        'title': '2.1875rem',
        'writeme': '0.875rem',
        'description': '1.6875rem',
        'moreabout': '1.8125rem',
        'offer': '3.125rem',
        'offerdescription': '1.9375rem',
        'personal': '2.6875rem'
      },
      letterSpacing: {
        'title': '0.071875rem',
        'writeme': '0.05625rem',
        'insta': '0.325rem',
        'footer': '0.2625rem',
        'graphic': '0.059375rem',
        'offer': '0.103125rem',
        'description': '0.053125rem',
        'moreabout': '0.11875rem'
      }
    }
  },
  plugins: [],
}
