const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport,
    autoprefixer,
    tailwindcss('./tailwind.config.js'),
    cssnano,
  ],
};
