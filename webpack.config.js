const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into common JS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};