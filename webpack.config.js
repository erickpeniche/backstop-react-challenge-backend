const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  target: "node",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'json'],
      fix: true,
    }),
    new NodemonPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
    ],
  },
};
