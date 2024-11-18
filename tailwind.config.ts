const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      '2xs': "400px",
      xs: "470px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
      '2xl': "1280px",
      '3xl': "1320px",
      '4xl': "1400px",
      '5xl': "1480px",
    },
    extend: {
      colors: {
        'primary': '#DCC397',
        'secondary': '#100A55',
        'text1': '#000929',
        'text2': '#777777',
        'border1': '#E0DEF7',
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      textShadow: {
        'text-custom': '-.03ex 0 currentColor, .03ex 0 currentColor',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '-.03ex 0 currentColor, .03ex 0 currentColor',
        },
      });
    },
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
};