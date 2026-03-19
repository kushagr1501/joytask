/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haldi: {
          light: '#F4D03F',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        saffron: {
          light: '#FF9933',
          DEFAULT: '#FF7043',
          dark: '#CC5500',
        },
        marigold: {
          light: '#FFC107',
          DEFAULT: '#FFB300',
          dark: '#FF8F00',
        },
        sindoor: {
          light: '#E53935',
          DEFAULT: '#B71C1C',
          dark: '#7F0000',
        },
        tulsi: {
          light: '#3E8E7E',
          DEFAULT: '#2C5E4F',
          dark: '#1B3B31',
        },
        canvas: {
          DEFAULT: '#FFFDF9',
          dark: '#F5F0E8',
        },
        ink: {
          light: '#4A4A4A',
          DEFAULT: '#1C1C1C',
          dark: '#000000',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        luxury: '.2em',
      }
    },
  },
  plugins: [],
}
