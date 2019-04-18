const webpackConfig = require('./dev.base');

webpackConfig.mode('development')
            .devtool('#@source-map')

// devServer
webpackConfig.devServer
	.contentBase('lib/')
	.port('4044')
	.host('0.0.0.0')
    .set('index', 'index.html');
    
module.exports = webpackConfig.toConfig();