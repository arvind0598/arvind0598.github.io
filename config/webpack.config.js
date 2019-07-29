const path = require('path');
const CSSNano = require('cssnano');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const IS_DEV = process.env.NODE_ENV !== 'production';

/**
 * PLUGIN CONFIGS
 */

const HTMLWebpackPluginConfig = {
  filename: 'index.html',
  template: 'src/index.pug',
  inject: true,
  minify: IS_DEV && {
    html5: true,
    collapseWhitespace: true,
    caseSensitive: true,
    removeComments: true,
    removeEmptyElements: false,
  },
};

const MiniCSSExtractPluginConfig = {
  filename: '[name]-styles.css',
  chunkFilename: '[id].css',
};

/**
  * RULES
  */

const pugRule = {
  test: /\.pug$/,
  use: [
    'html-loader',
    'pug-html-loader',
  ],
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    autoprefixer: {
      browsers: ['last 2 versions'],
    },
    sourceMap: IS_DEV,
    plugins: () => [
      autoprefixer,
      ...(IS_DEV ? [] : [CSSNano]),
    ],
  },
};

const sassRule = {
  test: /\.(scss|css)$/,
  use: [
    {
      loader: MiniCSSExtractPlugin.loader,
      options: {
        hmr: IS_DEV,
      },
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: IS_DEV,
      },
    },
    postCSSLoader,
    {
      loader: 'sass-loader',
      options: {
        sourceMap: IS_DEV,
      },
    },
  ],
};

const imageRule = {
  test: /\.(png|jpg|gif|jpeg)/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 5000,
      },
    },
  ],
};

/**
 * WEBPACK CONFIGS
 */

const devServerConfig = {
  devtool: IS_DEV && 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    watchContentBase: true,
  },
};

const outputFormatConfig = {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
};

const optimizationConfig = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};

/**
 * FINAL CONFIGURATION
 */

const webpackConfig = {
  entry: './src/app.js',
  ...outputFormatConfig,
  ...devServerConfig,
  ...optimizationConfig,
  module: {
    rules: [
      pugRule,
      sassRule,
      imageRule,
    ],
  },
  plugins: [
    new HTMLWebpackPlugin(HTMLWebpackPluginConfig),
    new MiniCSSExtractPlugin(MiniCSSExtractPluginConfig),
    new Visualizer(),
  ],
};

module.exports = webpackConfig;
