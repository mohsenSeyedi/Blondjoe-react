/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#2d2c34",
        "white" : "#FFF",
        "blue" : "#1c80eb",
        "black" : "#0c0c17",
        "black-secondary" : "#27282FFF",
        "gray" : "#7d8093",
        "green" : "#07984a",
        "pay-gray" : "#929292",
      },
      screens: {
        '3xl': {'min': '1536px'},
        '2xl': {'max': '1535px'},
        'xl' : {'max': '1200px'},
        'lg' : {'max': '992px'},
        'md' : {'max': '767px'},
        'sm' : {'max': '576px'},
      }
    },
  },
  plugins: [],
}

