/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
        },
      },
      animation: {
        'gentle-bounce': 'gentle-bounce 2s infinite',
        'spin-slow': 'spin 5s linear infinite',
      },

      colors: {
        paleYellow: '#ffeea9',
      },
    },
  },
  plugins: [],
}