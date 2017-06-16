const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");
const webpack = require("webpack");

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: "errors-only",
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true
    },
    proxy: {
      "/api": {
        target: {
          host: "localhost",
          protocol: "http:",
          port: 3000
        },
        ignorePath: false,
        changeOrigin: true,
        secure: false
      }
    }
  }
});

exports.lintJavaScript = ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: "pre",

        loader: "eslint-loader",
        options
      }
    ]
  }
});

exports.loadFonts = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include,
        exclude,
        use: ["file-loader"]
      }
    ]
  }
});

exports.loadLESS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.less$/,
        include,
        exclude,

        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,

        use: ["style-loader", "css-loader"]
      }
    ]
  }
});

exports.extractCSS = ({ include, exclude, use }) => {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: plugin.extract({
            use,
            fallback: "style-loader"
          })
        }
      ]
    },
    plugins: [ plugin ]
  };
};

exports.loadJavaScript = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,

        loader: "babel-loader",
        options: {
          // Enable caching for improved performance during
          // development.
          // It uses default OS directory by default. If you need
          // something more custom, pass a path to it.
          // I.e., { cacheDirectory: '<path>' }
          cacheDirectory: true
        }
      }
    ]
  }
});

exports.extractBundles = (bundles) => ({
  plugins: bundles.map((bundle) => (
    new webpack.optimize.CommonsChunkPlugin(bundle)
  ))
});

exports.minifyJavaScript = () => ({
  plugins: [
    new BabiliPlugin()
  ]
});

exports.setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
};
