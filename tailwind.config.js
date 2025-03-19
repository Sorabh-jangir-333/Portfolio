// module.exports = {
//   mode: 'jit',
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        'color-animation': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'color-animation': 'color-animation 4s linear infinite',
      },
    },
  },
  plugins: [],
};
