require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  context: path.join(__dirname, '/src'), // `__dirname` is root of project and `src` is source
  entry: {
    app: './index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'), // `dist` is the destination
    filename: '[name].bundle.js',
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: path.join(__dirname, '/src'),
    //noInfo: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })]
};

module.exports = config;
