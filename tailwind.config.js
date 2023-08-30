const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      addComponents ({
        '.card' : {
          boxShadow: `0, 4px, 8px, 0`,
          transition: `0.3s`,
          borderRadius: `5px` /* 5px rounded corners */
        }
      })
    }),
  ],
}

