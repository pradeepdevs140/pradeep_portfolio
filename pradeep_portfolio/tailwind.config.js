/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          dark: '#121212',
          light: '#1E1E1E',
        },
        gold: {
          DEFAULT: '#C6A664',
        },
        offwhite: '#EAEAEA',
      },
    },
  },
  plugins: [],
}