const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProduction = env === 'production';
const plugins = isProduction
  ? [new webpack.optimize.UglifyJsPlugin(), new webpack.optimize.OccurrenceOrderPlugin()]
  : [];

const config = {
  context: path.join(__dirname, './'), // `__dirname` is root of project and `src` is source
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'babel-polyfill'],
  },
  output: {
    path: path.join(__dirname, '/dist'), // `dist` is the destination
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: '/'
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    open: true, // to open the local server in browser
    contentBase: path.join(__dirname, './'),
    historyApiFallback: true,
    stats: {
      colors: true,
      assets: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=assets/[name].[ext]'
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
  plugins: plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify(process.env.BASE_URL),
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash].js',
    }),
    new HtmlWebpackPlugin({ template: 'index.html' })
  ])
};

module.exports = config;
