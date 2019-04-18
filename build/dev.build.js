const webpackConfig = require('./dev.base');

webpackConfig.mode('production')

module.exports = webpackConfig.toConfig();