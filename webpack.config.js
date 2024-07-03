const path = require("path");

module.exports = {
  entry: "./app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name]-[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    fallback: {
      crypto: false,
      path: false,
      fs: false,
    },
  },
  devtool: "source-map",
  optimization: {
    usedExports: true,
  },
};
