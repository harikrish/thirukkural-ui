const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'demo/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'demo/index.html'),
      filename: "./index.html"
    })
  ]
};