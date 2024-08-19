const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
      open: true,
      host: 'localhost',
      port: 9090,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
      }),
      new MiniCssExtractPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.css$/i,
            use: [stylesHandler, 'css-loader'],
         },
         {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: 'asset',
         },
      ],
   },
};

module.exports = () => {
   if (isProduction) {
      config.mode = 'production';
      config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
   } else {
      config.mode = 'development';
   }
   return config;
};
