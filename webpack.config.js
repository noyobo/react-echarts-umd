const path = require('path');

module.exports = {
  entry: {
    'react.echarts': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'umd'),
    library: 'ReactEcharts',
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
