/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        india: {
          saffron: '#E86A33',    // Refined premium saffron
          white: '#FAF9F6',      // Off-white/Ivory
          green: '#1A5D42',      // Deep emerald/India green
          navy: '#0F2C59',       // Chakra navy
          ink: '#1C1917',        // Very dark charcoal for text
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"EB Garamond"', 'serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.1em',
        luxury: '0.2em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
