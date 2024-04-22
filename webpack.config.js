const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'labeledvalue.bundle.js',
    library: 'LabeledValue',
    libraryTarget: 'umd'
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
    'react': 'commonjs react',  // This ensures React is treated as a CommonJS module
  'react-dom': 'commonjs react-dom',
    'ol': 'ol',
    'ol/ol.css': 'ol/ol.css',
    'ol/layer': 'ol/layer',
    'ol/source': 'ol/source',
    'ol/format': 'ol/format',
    'ol/style': 'ol/style'
    
       
        
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'labeledvalue.bundle.css',
    }),
  ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: {
                condition: /^\**!|@preserve|@license|@cc_on/i, // Adjusted to include more types of comments
                banner: (licenseFile) => {
                    return `License information can be found in LICENSE.txt. For more details, see LICENSE.txt in the project root.`;
                },
            },
        })]
    },
    devtool: 'source-map'
};
