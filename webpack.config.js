const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  mode: "development",
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
    library: "LIB",
    libraryTarget: "var"
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
}
