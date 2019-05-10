const webpackConfig = require('./webpack.com');
const Config = require('./config.path');
const path = require('path');

// entry output devtool mode
webpackConfig
	.entry('dvui')
        .add('./src/index.js')
        .end()
    .output
        .path(`${Config.distPath}`)
        .filename('js/[name].js')

// module
const markdownRender = require('markdown-it')();

webpackConfig.module
	.rule('md')
	.test(/\.md$/)
	.use('vue-loader')
	.loader('vue-loader')
	.end()
	.use('vue-markdown')
	.loader('vue-markdown-loader/lib/markdown-compiler')
	.options({
		preventExtract: true,
		raw: true,
		use: [
			[
				require('markdown-it-container'),
				'demo',
				{
					validate: function(params) {
						return params.trim().match(/^demo\s+(.*)$/);
					},

					render: function(tokens, idx) {
						if (tokens[idx].nesting === 1) {
							// 1.获取第一行的内容使用markdown渲染html作为组件的描述
							let demoInfo = tokens[idx].info
								.trim()
								.match(/^demo\s+(.*)$/);
							let description =
								demoInfo && demoInfo.length > 1
									? demoInfo[1]
									: '';
							let descriptionHTML = description
								? markdownRender.render(description)
								: '';
							// 2.获取代码块内的html和js代码
							let content = tokens[idx + 1].content;
							// 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
							return `<demo-block>
            <div class="source" slot="source">${content}</div>
            ${descriptionHTML}
            <div class="highlight" slot="highlight">`;
						} else {
							return '</div></demo-block>\n';
						}
					}
				}
			]
		]
	});

const lessRule = webpackConfig.module.rule('less').test(/\.less$/);

lessRule
	.use('source')
	.loader('style-resources-loader')
	.options({
		patterns: path.resolve(
			__dirname,
			'../packages/theme-chalk/base.less'
		)
	});

// plugins
webpackConfig
	.plugin('clean')
        .use(require('clean-webpack-plugin'), [
            ['dist'],
            {
                root: Config.uiPath
            }
        ])
        .end()
	.plugin('html')
        .use(require('html-webpack-plugin'), [
            {
                filename: 'index.html',
                template: Config.tplPath
            }
        ])
        .end()
    .plugin('mini-css')
        .use(require('mini-css-extract-plugin'), [{filename: 'css/[name].css'}])

webpackConfig.optimization
	.splitChunks({
		chunks: 'all',
		automaticNameDelimiter: '-',
		cacheGroups: {
			lib: {
				test: /[\\/]node_modules[\\/]/,
				priority: -10
			},
			default: {
				minChunks: 2,
				priority: -20,
				reuseExistingChunk: true
			}
		}
	})
	.runtimeChunk({
		name: 'runtime'
	});

module.exports = webpackConfig;