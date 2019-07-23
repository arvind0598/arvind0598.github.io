const path = require('path');
const CSSNano = require('cssnano');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

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
    ],
  },
  plugins: [
    new HTMLWebpackPlugin(HTMLWebpackPluginConfig),
    new MiniCSSExtractPlugin(MiniCSSExtractPluginConfig),
  ],
};

module.exports = webpackConfig;
