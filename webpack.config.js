require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

const config = {
  context: path.join(__dirname, './'), // `__dirname` is root of project and `src` is source
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'), // `dist` is the destination
    filename: '[name].bundle.js',
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: path.join(__dirname, './'),
    historyApiFallback: true,
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=/assets/[name].[ext]'
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([autoprefixer])
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })]
};

module.exports = config;
