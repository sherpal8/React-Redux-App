// to configure webpack for development env --> must be in root folder
const webpack = require("webpack"); // CommonJS style syntax as ES6 not yet supported by Node
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; // so babel plugin knows this is in dev mode

// below is a JS object to be exported for Webpack config in dev env
module.exports = {
  mode: "development", //to disable prod only features
  target: "web", // can be node / web (browser)
  devtool: "cheap-module-source-map", // this tool allows us get source map for debudding in browser
  entry: "./src/index", // i.e. ./src/index.js
  output: {
    // not technically necessary as webpack doesn't output code for dev. but, needed for config object
    path: path.resolve(__dirname, "build"), // directory name
    publicPath: "/", // URL in browser
    filename: "bundle.js" // this is served from memory for the dev environment
  },
  devServer: {
    // webpack server as an alternative to Express server
    stats: "minimal",
    overlay: true,
    historyApiFallback: true, // all request be sent to index.html
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    rules: [
      // an array to handle different groups of files e.g. js/jsx, css
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
