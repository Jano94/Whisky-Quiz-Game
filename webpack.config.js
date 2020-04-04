const path = require("path");
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const MiniCSS = require("mini-css-extract-plugin");

// const entryPath = "Whisky-Quiz-Game — kopia";

module.exports = {
  entry: ["whatwg-fetch", `./app.js`],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `./build`) //entry
  },
  devServer: {
    contentBase: path.join(__dirname), //entry
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          // MiniCSS.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: `./images/`,
          outputPath: `./images/`
        }
      }
    ]
  },
  plugins: [
    new Html({
      filename: "index.html",
      template: `./index.html`
    }),
    new MiniCSS({
      filename: `./style.css`,
    })
  ]
};