// to configure webpack for production env --> must be in root folder
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");

process.env.NODE_ENV = "production"; // so babel plugin knows this is in production mode

// below is a JS object to be exported for Webpack config in production env
module.exports = {
  mode: "production", // this enables features for prod mode
  target: "web", // can be node / web (browser)
  devtool: "source-map",
  entry: "./src/index", // i.e. ./src/index.js
  output: {
    // not technically necessary as webpack doesn't output code for dev. but, needed for config object
    path: path.resolve(__dirname, "build"), // directory name
    publicPath: process.env.ASSET_PATH || "/", // URL in browser
    filename: "bundle.js"
  },
  plugins: [
    // Display bundle stats
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: "static"
    }),

    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV), // NODE_ENV = 'production' (see above)
      "process.env.API_URL": JSON.stringify("http://localhost:3001") // base-url: mock API served locally
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
      minify: {
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
