const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
       'ol': 'ol',
        'ol/Map': 'ol.Map',
        'ol/View': 'ol.View',
        'ol/layer': 'ol.layer',
        'ol/layer/Tile': 'ol.layer.Tile',
        'ol/layer/Vector': 'ol.layer.Vector',
        'ol/source': 'ol.source',
        'ol/source/OSM': 'ol.source.OSM',
        'ol/source/Vector': 'ol.source.Vector',
        'ol/format': 'ol.format',
        'ol/format/GeoJSON': 'ol.format.GeoJSON',
        'ol/style': 'ol.style',
        'ol/style/Style': 'ol.style.Style',
        'ol/style/Fill': 'ol.style.Fill',
        'ol/style/Stroke': 'ol.style.Stroke'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],

  },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    devtool: 'source-map'
  
};
