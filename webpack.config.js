var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPlugConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  devServer: {
    inline: true,
    port: process.env.PORT || 5000
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader:'style-loader!css-loader'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'image-webpack-loader!file-loader'}
    ]
  },
  plugins: [HtmlWebpackPlugConfig]
}
