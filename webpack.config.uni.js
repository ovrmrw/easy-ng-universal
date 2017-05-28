const ngtools = require('@ngtools/webpack');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: ['./src/uni/app.server.ts', './src/uni/main.server.ts']
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  output: {
    path: path.join(process.cwd(), 'dist-uni'),
    filename: 'server.js'
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.uni.json'
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],
  module: {
    rules: [
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: '@ngtools/webpack' }
    ]
  }
}
