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
        primary: {
          DEFAULT: '#E62B1E', // TEDx Red
          light: '#FF4C40',
          dark: '#B0180F',
        },
        secondary: {
          DEFAULT: '#000000', // Black
          light: '#1A1A1A',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#2D3748',
          light: '#4A5568',
          dark: '#1A202C',
        },
        brand: {
          red: '#E62B1E',
          black: '#000000',
          dark: '#111111',
          gray: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'premium': 'none',
        'glass': 'none',
        sm: 'none', DEFAULT: 'none', md: 'none', lg: 'none', xl: 'none', '2xl': 'none', inner: 'none'
      },
      dropShadow: {
        sm: 'none', DEFAULT: 'none', md: 'none', lg: 'none', xl: 'none', '2xl': 'none'
      }
    },
  },
  plugins: [],
}
