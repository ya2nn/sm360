const screens = require('./tailwind/js/screens')
const colors = require('./tailwind/js/colors')

module.exports = {
  content: ['./stories/**/*.jsx'],
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