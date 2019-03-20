const rebasePlugin = require('rollup-plugin-rebase');

const rebase = rebasePlugin({outputFolder: './es/', outputBase: './es/', input: './src/*', prependName: true, verbose: true});

module.exports = {
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'es/index.js'
  },
  external: rebase.isExternal,
  plugins: [rebase]
};