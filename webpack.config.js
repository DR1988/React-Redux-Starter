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
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'],
    },
    entry: [
      'babel-polyfill',
      dev('webpack-hot-middleware/client'),
      path.join(__dirname, 'app/index.js')],
    output: {
      path: dist,
      filename: 'build.js',
      publicPath: '/',
    },
    devtool: env.dev ? 'eval' : null,
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            `css-loader?modules&importLoaders=1&localIdentName=${
              env.dev ? '[name]__[local]' : '[hash:base64:5]'
            }&sourceMap=${!!env.dev}&context=/`,
            'sass-loader',
          ],
        }, {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader'],
          include: path.join(__dirname, 'app'),
        }],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss() {
            return [autoprefixer({
              browsers: ['> 1%',
                'last 3 version'],
            })]
          },
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  }
}
