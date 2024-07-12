/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        primary: {
          dark: '#1E1E1E',
          light: '#787878',   
        },
        secondary: {
          light: '#FFD166',
          DEFAULT: '#FFA500',
          dark: '#CC8400',
        },
        action: {
          hold: '#FF4C29',
          buy: '#00C48C',
          sell: '#FF4C29',
        }
        // You can add more custom colors here
      },
    },
  },
  plugins: [],
}

