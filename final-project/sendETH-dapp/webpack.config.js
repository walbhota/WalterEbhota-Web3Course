// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/main.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/, // To load CSS files if needed
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './public', // Directory to serve files from
    port: 8080, // Port to run the server on
  },
};
