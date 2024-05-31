/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customWhite: '#FEFBF7',
      },
      fontFamily: {
        'noto-serif': ['Noto Serif', 'serif'],
        'norwester': ['Norwester', 'sans-serif']
      },
    },
  },
  plugins: [],
}
