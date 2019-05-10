const path = require('path');
const webpackChain = require('webpack-chain');
const webpackConfig = new webpackChain();
const Config = require('./config.path');

// module.rules
webpackConfig.module
	.rule('js')
	.test(/\.js$/)
    .include
        .add(Config.srcPath)
        .add(Config.packagesPath)
	.end()
	.use('babel')
	.loader('babel-loader');

const lessRule = webpackConfig.module.rule('less').test(/\.less$/);

lessRule
	.use('mini-css-extract-plugin')
	.loader(require('mini-css-extract-plugin').loader)
	.options({
		publicPath: '../' //分离后CSS文件的打包位置
	})
	.end()
	.use('css')
	.loader('css-loader')
	.end()
	.use('less')
	.loader('less-loader')
	.end()

const cssRule = webpackConfig.module.rule('css').test(/\.css$/);

cssRule
	.use('style')
	.loader('style-loader')
	.end()
	.use('css')
	.loader('css-loader')
	.end()
	.use('postcss')
	.loader('postcss-loader');

webpackConfig.module
	.rule('image')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
            .use('url')
            .loader('url-loader')
            .options({
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            })
            .end()
	    .end()
	.rule('media')
        .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
            .use('vurl')
            .loader('url-loader')
            .options({
                limit: 10000,
                name: 'media/[name].[hash:7].[ext]'
            })
            .end()
        .end()
	.rule('font')
        .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
            .use('furl')
            .loader('url-loader')
            .options({
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
            })
            .end()
        .end()
    .rule('vue')
        .test(/\.vue$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()

// plugins
webpackConfig
    .plugin('vue')
        .use(require('vue-loader/lib/plugin'))
        .end()

// resolve
webpackConfig.resolve.extensions
	.add('.js')
	.add('.css')
	.add('.vue')
    .add('.less');

webpackConfig.resolve.alias
    .set('ui', Config.uiPath);

module.exports = webpackConfig;