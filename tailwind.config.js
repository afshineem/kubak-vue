module.exports = {
  purge: {
    enable: false,
    content: ['./index.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange': '#F07F18',
      },
      fontFamily: {
        'Yekan': ['BYekan'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
