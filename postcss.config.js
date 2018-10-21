module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-font-magician': {
      variants: {
        Quicksand: {
          300: [],
          400: [],
          700: [],
        },
        Arvo: {
          300: [],
          400: [],
          700: [],
        },
      },
      foundries: ['google'],
    },
  },
};
