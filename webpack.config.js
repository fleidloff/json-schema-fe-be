const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpack = require("webpack");

const parts = require("./webpack.parts");

const PATHS = {
  app: path.join(__dirname, "client"),
  build: path.join(__dirname, "build")
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: "[name].[chunkhash].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo"
      })
    ]
  },
  parts.lintJavaScript({ include: PATHS.app }),
  parts.loadJavaScript({ include: PATHS.app })
]);

const productionConfig = merge([
  {
    performance: {
      hints: "warning", // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 100000 // in bytes
    },
    plugins: [
      new webpack.NamedModulesPlugin()
    ]
  },
  parts.extractCSS({ use: "css-loader" }),
  parts.extractBundles([
    {
      name: "vendor",
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf("node_modules") >= 0 &&
        resource.match(/\.js$/)
      )
    },
    {
      name: "manifest"
    }
  ]),
  parts.setFreeVariable(
    "process.env.NODE_ENV",
    "production"
  ),
  parts.minifyJavaScript()
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS(),
  parts.loadLESS(),
  parts.loadFonts(),
  parts.setFreeVariable(
    "process.env.NODE_ENV",
    "development"
  )
]);

module.exports = (env) => {
  process.env.BABEL_ENV = env;

  if (env === "production") {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
