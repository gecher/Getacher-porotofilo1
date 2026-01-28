// craco.config.js - Create React App Configuration Override
const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: [
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: path.resolve(__dirname, 'src/serviceWorker.js'),
        swDest: 'service-worker.js',
        exclude: [/\.map$/, /asset-manifest\.json$/],
      }),
    ],
  },
  jest: {
    configure: {
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
    },
  },
};