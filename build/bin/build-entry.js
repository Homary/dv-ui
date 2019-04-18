const fs = require('fs');
const path = require('path');
const Config = require('../config');

const packagesPath = Config.packagesPath;

new Promise((resolve, reject) => {
    console.log('> 开始构建组件入口');
    fs.readdir(packagesPath, (err, files) => {
		if (err) throw err;
		resolve(files);
	});
}).then( files => {
    let components = {};

    files.forEach( file => {
        if(file === 'theme-chalk') {

        }else {
            if(file === 'index.js') {
                components['index'] = './packages/index.js';
            }else {
                components[file] = `./packages/${file}/index.js`;
            }
        }
    })

    let componentsPath = path.resolve(__dirname, '../../components.json');

    fs.writeFile(componentsPath, JSON.stringify(components), err => {
        if(err) throw err;
        console.log('> 完成组件入口构建');
    })
})