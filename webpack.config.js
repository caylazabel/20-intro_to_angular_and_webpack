'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  plugins: [
    new HTMLPlugin({
      template:`${__dirname}/app/index.html`
    })
  ],
  module: {
    loaders: [ //take static assets and turn them into javascript files
      {
        test: /\.scss$/,
        loader: 'style!css!sass!' //from right to left//
      }
    ]
  }
};
