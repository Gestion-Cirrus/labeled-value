const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'labeledvalue.bundle.js',
    library: {
      name: 'LabeledValue',
      type: 'umd',
      export: 'named'
    },
    globalObject: 'this'  // Ensures compatibility with both browser and Node.js environments
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'ol': 'ol',
    'ol/ol.css': 'ol/ol.css',
    'ol/layer': 'ol/layer',
    'ol/source': 'ol/source',
    'ol/format': 'ol/format',
    'ol/style': 'ol/style'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'labeledvalue.bundle.css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: 'all',
      terserOptions: {
        format: {
          comments: false,
        },
      },
    })],
  },
  devtool: 'source-map'
};
