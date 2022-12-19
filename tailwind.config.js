/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
    fontSize: {
      '3xs': '.55rem',
      '2xs': '.65rem',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}