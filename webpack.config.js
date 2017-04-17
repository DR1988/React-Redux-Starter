import webpack from 'webpack'
import path from 'path'

// import ExtractTextPlugin from 'extract-text-webpack-plugin'
// const webpack = require('webpack')
// import CleanWebpackPlugin from 'clean-webpack-plugin'
export const dist = path.join(__dirname, 'dist')

export default (env) => {
  const dev = o => (env.dev ? o : null)

  return {
    resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx'],
    },
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      dev('webpack-hot-middleware/client'),
      path.join(__dirname, 'app/index.js')],
    output: {
      path: dist,
      filename: 'build.js',
      publicPath: '/',
    },
    watch: env.dev,
    devtool: env.dev ? 'eval' : null,
    module: {
      preLoaders: [{
        test: /\.jsx$/,
        loaders: ['eslint-loader'],
        include: [
          path.resolve(__dirname),
        ],
      }],
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel'],
          include: path.join(__dirname),
        },
        {
          test: /\.scss$/,
          loader: 'style!css!autoprefixer?browser=last 2 versions!sass',
        },
      ],
    },
    plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
  }
}
