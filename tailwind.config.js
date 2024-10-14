/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["*"],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'whitee': '#FFFFFF',
        'grayy': '#D9D9D9',
        'grayy-10': 'rgba(58, 58, 58, 0.3)',
        'grayy-30': 'rgba(217, 217, 217, 0.3)',
        'grayy-80': '#C9C9C9',
        'black-30': '#141313',
        'oceann': '#3F6CE1',
        'greenn': '#22AD0B',
        'yeloww': '#CE9F26',
        'pinkk': '#FC79FF',
        'darkk': 'rgba(217, 217, 217, 0.05)',
        'overlayy': 'rgba(0, 0, 0, 0.4)'
      },
    },
  },
  plugins: [],
}

