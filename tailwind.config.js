/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f2',
          100: '#fbe4e4',
          200: '#f7cdcd',
          300: '#f1a8a8',
          400: '#e57777',
          500: '#d54d4d',
          600: '#b93232',
          700: '#800000', // Varsity Maroon
          800: '#6b0404',
          900: '#5a0808',
          950: '#310202',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
