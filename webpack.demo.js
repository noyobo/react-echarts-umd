const path = require('path');

module.exports = {
  entry: {
    index: './demo/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'demo'),
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
    react: 'React',
    'react-dom': 'ReactDOM',
    'echarts-for-react': 'recharts',
    recharts: 'recharts',
  },
};
