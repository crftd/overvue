module.exports = {
  plugins: {
    'postcss-normalize': {},
    precss: {},
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
    autoprefixer: {},
  },
};
