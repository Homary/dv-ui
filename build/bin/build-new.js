const readline = require('readline');
const fs = require('fs');
const Config = require('../config');

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
			rl.setPrompt('组件标题:');
			break;

		case 2:
			config.title = line;
			rl.setPrompt('组件路由路径:');
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
		fs.mkdir(
			`${Config.packagesPath}/${config.name}/src`,
			{ recursive: true },
			err => {
				if (err) throw err;

				fs.writeFile(
					`${Config.packagesPath}/${config.name}/src/${config.name}.vue`,
					'<template>\n</template>\n<script>\n</script>\n<style>\n</style>',
					'utf8',
					err => {
                        if (err) throw err;
                        
                        console.log('> 成功创建Vue文件');
					}
				);
				fs.writeFile(`${Config.packagesPath}/${config.name}/index.js`,
					`import ${config.name} from './src/${config.name}';
${config.name}.install = function (Vue) {
    Vue.component(${config.name}.name, ${config.name});
}
export default ${config.name};`,
					'utf8',
					err => {
						if (err) throw err;
                        
                        console.log(
							'> 成功创建index.js'
						);
                        
						fs.readFile(Config.routerPath,'utf8',(err, data) => {
                            if (err) throw err;
                            
							const newRouter = data.replace(/]/,
							`,{
        path: '${config.path}',
        name: '${config.name}',
        title: '${config.title}',
        component: r =>
            import(
                /* webpackChunkName: "${config.name}" */ 'ui/docs/${config.name}.md'
            ).then(module => {
                r(module.default);
            })
    }]`);
                                
                                fs.writeFile(Config.routerPath, newRouter, err => {
                                    if(err) throw err;

                                    console.log(
										'> 成功添加路由'
									);
                                    fs.writeFile(
                                        `${Config.docsPath}/${config.name}.md`,
                                        `## ${config.title}`,
                                        'utf8',
                                        err => {
                                            if (err) throw err;
    
                                            console.log(
												'> 成功创建Markdown文件'
                                            );
                                            console.log('> 创建成功');
                                            
                                            process.exit(0);
                                        }
                                    );
                                })
							}
						);
					}
				);
			}
		);
	});
});
