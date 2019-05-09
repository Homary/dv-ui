const webpackConfig = require('./webpack.com');
const entrys = require('../components.json');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Config = require('./config');

webpackConfig.mode('production');

for(let key in entrys) {
    webpackConfig
        .entry(key)
        .add(entrys[key])
}

webpackConfig
    .output
        .path(Config.libPath)
        .filename('[name].js')
        .library('dv-ui')
        .libraryTarget('umd')
        .end()

webpackConfig
	.plugin('clean')
        .use(CleanWebpackPlugin, [
            ['*.js'],
            {
                root: Config.libPath,
                verbose: true
            }
        ])
        .end()
    .plugin('mini-css-extract')
        .use(require('mini-css-extract-plugin'), [{filename: 'theme-chalk/index.css'}]); 
module.exports = webpackConfig.toConfig(); 