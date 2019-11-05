const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: require.resolve('ts-loader')
      },
      {
        test: /\.less/,
        loader: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('less-loader'),
            options: {
              javascriptEnabled: true
            }
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.less', '.js', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}
