import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'

// import ExtractTextPlugin from 'extract-text-webpack-plugin'
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
    devtool: env.dev ? 'eval' : null,
    module: {
      preLoaders: [{
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: [
          path.resolve(__dirname),
        ],
      }],
      loaders: [
        {
          test: /\.s?css$/,
          loader: `style-loader!css-loader?modules&importLoaders=1&localIdentName=${
            env.dev ? '[name]__[local]' : '[hash:base64:5]'
          }&sourceMap=${!!env.dev}!sass`,
        }, {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel'],
          include: path.join(__dirname, 'app'),
        }],
    },
    postcss: () => [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ],
    plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
  }
}
