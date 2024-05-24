/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'fuzzy-wuzzy-brown': {  DEFAULT: '#C66E52',  50: '#F4E2DC',  100: '#EED5CD',  200: '#E4BBAE',  300: '#DAA18F',  400: '#D08871',  500: '#C66E52',  600: '#A85337',  700: '#7E3E2A',  800: '#54291C',  900: '#2A150E',  950: '#150A07'},
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

