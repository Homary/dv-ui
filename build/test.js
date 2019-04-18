const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		test: path.resolve(__dirname, '../test/index.js')
	},
	output: {
		filename: 'test.js',
		path: path.resolve(__dirname, '../lib/test/')
	},
	module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: require('html-webpack-template'),
			appMountId: 'app',
			inject: false,
			title: '组件功能测试',
			meta: [
				{
					name: 'viewport',
					content:
						'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
				}
			],
			filename: 'index.html'
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, '../lib/test/'),
		port: 8099
    },
    resolve: {
        alias: {
            'lib': path.resolve(__dirname, '../lib/')
        }
    }
};
