'use strict';

const path = require('path');

module.exports = {
  entry: {
    // config: './ui/config/config.js',
    // rdmty: './ui/dps/rdmty/dps.js',
    // xephero: './ui/dps/xephero/xephero.js',
    // eureka: './ui/eureka/eureka.js',
    // fisher: './ui/fisher/fisher.js',
    // jobs: './ui/jobs/jobs.js',
    oopsyraidsy: './ui/oopsyraidsy/oopsyraidsy.js',
    // pullcounter: './ui/pullcounter/pullcounter.js',
    // radar: './ui/radar/radar.js',
    // raidboss: './ui/raidboss/raidboss.js',
    test: './ui/test/test.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
