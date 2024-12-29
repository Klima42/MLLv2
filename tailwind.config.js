/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#22c55e',
          700: '#16a34a'
        }
      }
    },
  },
  plugins: []
}