import webpack from 'webpack' 
import path from 'path'

// const webpack = require('webpack')
// import  ExtractTextPlugin from 'extract-text-webpack-plugin'
// import CleanWebpackPlugin from 'clean-webpack-plugin'
export const dist = path.join(__dirname, 'dist')

console.log(process.env.NODE_ENV)

export default (env) => {

  const dev = o => { return env.dev ? o : null}

  return {
    resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx']
    },
    entry: [
      'babel-polyfill',
      dev('webpack-hot-middleware/client'),
      'react-hot-loader/patch',
      path.join(__dirname, 'app/index.js')],
    output: {
      path: dist,
      filename: 'build.js',
      publicPath: '/',
    },
    watch: env.dev,
    devtool: env.dev ? 'eval' : null,
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel'],
          include: path.join(__dirname),
        }
      ]
    },
    plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only 
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
}