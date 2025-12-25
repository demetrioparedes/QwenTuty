/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#1A1D3A',
        },
        primary: '#7B68EE',
        secondary: '#00D4FF',
        accent: '#FFD700',
      },
      fontFamily: {
        sans: ['"Quattrocento Sans"', 'sans-serif'],
        display: ['"Chiron Hei HK"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
