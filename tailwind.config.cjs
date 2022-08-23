/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{html,js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        primary: '#16ABF8',
        danger: '#ED4C5C',
        warning: '#F8A541',
        success: '#00A790',
        info: '#428BC1',
        epic: '#8942C1',
      }
    },
  },
  plugins: [],
}
