// to configure webpack for development env --> must be in root folder
const webpack = require("webpack"); // CommonJS style syntax as ES6 not yet supported by Node
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");

process.env.NODE_ENV = "production"; // so babel plugin knows this is in dev mode

// below is a JS object to be exported for Webpack config in dev env
module.exports = {
  mode: "production", // this enables features for prod mode
  target: "web", // can be node / web (browser)
  devtool: "source-map",
  entry: "./src/index", // i.e. ./src/index.js
  output: {
    // not technically necessary as webpack doesn't output code for dev. but, needed for config object
    path: path.resolve(__dirname, "build"), // directory name
    // publicPath: "/", // URL in browser
    filename: "bundle.js"
  },
  plugins: [
    // Display bundle stats
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: "static"
    }),

    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),

    new webpack.DefinePlugin({
      // This global makes sure React is built in prod mode
      "process.env.NODE_ENV": JSON.stringify("production"), // previously: process.env.NODE_ENV
      "process.env.API_URL": JSON.stringify(
        "https://react-redux-sherpal.netlify.com/"
      ) // prev: "http://localhost:3001"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
      minify: {
        // see https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhiteSpace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ],
  module: {
    rules: [
      // an array to handle different groups of files e.g. js/jsx, css
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader, // loaders run from bottom-up
          {
            loader: "css-loader",
            options: {
              sourceMap: true // for debug
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("cssnano")], // to minify css
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
