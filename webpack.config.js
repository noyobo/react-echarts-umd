const path = require('path');

module.exports = {
  entry: {
    recharts: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'umd'),
    library: 'recharts',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};
