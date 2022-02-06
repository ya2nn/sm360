const screens = require('./src/tailwind/js/screens')
const colors = require('./src/tailwind/js/colors')

module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx}'],
  theme: {
    fill: { current: 'currentColor' },
    screens: screens,
    extend: {
      colors: colors,
      boxShadow: {
        accordionItemContainer: '0 3px 6px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}