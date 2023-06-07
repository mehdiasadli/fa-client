/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebfdff',
          100: '#cef9ff',
          200: '#a2f2ff',
          300: '#63e5fd',
          400: '#1ccff4',
          500: '#00bde7',
          600: '#038db7',
          700: '#0a7194',
          800: '#125b78',
          900: '#144c65',
          950: '#063246'
        },
        gr: '#0AE700',
        yl: '#D7E700',
        bl: '#00BDE7',
        pr: '#DC00E7',
        vi: '#7D00E7',
        rd: '#E70000',
        or: '#E78300'
      }
    }
  },
  plugins: []
}
