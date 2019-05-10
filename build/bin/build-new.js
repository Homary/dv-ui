const readline = require('readline');
const fs = require('fs');
const Config = require('../config.path');
const components = require('../../components.json');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: '组件名:'
});

rl.prompt();

let cur = 0;
const config = {};

rl.on('line', line => {
	cur++;

	switch (cur) {
		case 1:
			config.name = line;
			rl.setPrompt('组件标题(为空则创建无文档组件):');
			break;

		case 2:
			config.title = line;
			rl.setPrompt('组件路由路径(为空则创建无文档组件):');
			break;
		default:
			config.path = line;
			rl.setPrompt('...\n');
			rl.close();
			break;
	}
	rl.prompt();
}).on('close', () => {
	fs.readdir(Config.packagesPath, (err, files) => {
		if (err) throw err;

		if (files.findIndex(file => file === config.name) !== -1) {
			console.log('\033[36m 组件名已存在 \033[39m\n');
			process.exit(0);
		}
        if (!config.name || config.name.length === 0) {
            console.log('\n\033[36m 组件名不能为空 \033[39m\n');
            process.exit(0);
        }
		// 创建.vue文件
		fs.mkdir(
			`${Config.packagesPath}/${config.name}/src`,
			{ recursive: true },
			err => {
				if (err) throw err;

				fs.writeFile(
					`${Config.packagesPath}/${config.name}/src/${
						config.name
					}.vue`,
					'<template>\n</template>\n<script>\n</script>\n<style>\n</style>',
					'utf8',
					err => {
						if (err) throw err;

						console.log('> 成功创建Vue文件');

						// 创建入口文件
						fs.writeFile(
							`${Config.packagesPath}/${config.name}/index.js`,
							`import DV${firstUpperCase(
								config.name
							)} from './src/${config.name}';
DV${firstUpperCase(config.name)}.install = function (Vue) {
    Vue.component(DV${firstUpperCase(config.name)}.name, DV${firstUpperCase(
								config.name
							)});
}
export default DV${firstUpperCase(config.name)};`,
							'utf8',
							err => {
								if (err) throw err;

								console.log('> 成功创建入口文件');

								let indexTpl = '';
								let componentsTpl = `const components = { \n`;

								for (let name in components) {
									if (name !== 'index') {
										indexTpl += `import ${firstUpperCase(
											name
										)} from './${name}/index';\n`;

										componentsTpl += `'dv-${name}': ${firstUpperCase(
											name
										)},\n`;
									}
								}

								indexTpl += `import ${firstUpperCase(
									config.name
								)} from './${
									config.name
								}/index';\n\nimport './theme-chalk/index'; \n`;

								componentsTpl += `'dv-${
									config.name
								}': ${firstUpperCase(config.name)} \n} \n`;

								const staticTpl = `
    const dvUi = {
        ...components,
    }

    const install = function (Vue, opts = {}) {
        Object.keys(dvUi).forEach(key => {
            Vue.component(key, dvUi[key]);
        });
        //定义静态组件
    }

    // auto install
    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }

    const API = {
        version: '1.0.0',
        install,
        ...components
    }

    export default API;`;
								indexTpl = indexTpl + componentsTpl + staticTpl;

								fs.writeFile(
									`${Config.packagesPath}/index.js`,
									indexTpl,
									'utf8',
									err => {
										if (err) throw err;
										console.log('> 注册组件');

										if (
											config.path.length === 0 ||
											config.title.length === 0
										) {
											console.log('> 创建成功 ');
											process.exit(0);
										}
									}
								);

								// 添加路由
								if (
									config.path.length !== 0 &&
									config.title.length !== 0
								) {
									fs.readFile(
										Config.routerPath,
										'utf8',
										(err, data) => {
											if (err) throw err;

											const newRouter = data.replace(
												/]/,
												`,{
                                    path: '${config.path}',
                                    name: '${config.name}',
                                    title: '${config.title}',
                                    component: r =>
                                        import(
                                            /* webpackChunkName: "${
												config.name
											}" */ 'ui/docs/${config.name}.md'
                                        ).then(module => {
                                            r(module.default);
                                        })
                                }]`
											);

											fs.writeFile(
												Config.routerPath,
												newRouter,
												err => {
													if (err) throw err;

													console.log(
														'> 成功添加路由'
													);
													// 创建markdown
													fs.writeFile(
														`${Config.docsPath}/${
															config.name
														}.md`,
														`## ${config.title}`,
														'utf8',
														err => {
															if (err) throw err;

															console.log(
																'> 成功创建Markdown文件'
															);

															console.log(
																'> 创建成功'
															);
															process.exit(0);
														}
													);
												}
											);
										}
									);
								}
							}
						);
					}
				);
			}
		);
	});
});

function firstUpperCase(str) {
	str = toHump(str);

	return str.replace(/( |^)[a-z]/g, L => L.toUpperCase());
}

function toHump(str) {
	let res = '';
	let strSplit = str.split('-');

	for (let i = 1; i < strSplit.length; i++) {
		strSplit[i] = strSplit[i][0].toUpperCase() + strSplit[i].slice(1);
	}
	res = strSplit.join('');

	return res;
}
