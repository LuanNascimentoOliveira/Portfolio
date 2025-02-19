/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#965DF1',
        'purple-black': '#7F51C9',
      },
      fontFamily: {
        playwrite: ['Playwrite US Modern', ...defaultTheme.fontFamily.serif]
      },
      cursor: {
        'pointer': 'url(/assets/icons/Cursor.svg), pointer',
      },
      keyframes: {
        appear: {
          '0%': { opacity: "0", scale: "0.5" },
          '100%': { opacity: "1", scale: "1" },
        },
        openmenu: {
          // initial position
          '0%': { right: '-224px', visibility: 'hidden'},
          // final position
          '100%': { right: '0px', visibility: 'visible'}
        },
        closemenu: {
          // initial position
          '0%': { right: '0px', visibility: 'visible'},
          // final position
          '100%': { right: '-224px', visibility: 'hidden', opacity: '0'}
        }
      },
      animation: {
        "appear": "appear 1s linear",
        "openmenu": 'openmenu 1s ease-in-out forwards',
        "closemenu": 'closemenu 1s ease-in-out forwards',
      }

    },
  },
  plugins: [],
}

