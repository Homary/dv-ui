const path = require('path');

const packagesPath = resolve('../packages/');
const routerPath = resolve('../src/router/index.js');
const srcPath = resolve('../src/');
const libPath = resolve('../lib/');
const tplPath = resolve('../dvui.html');
const distPath = resolve('../dist/');
const docsPath = resolve('../docs/');
const rootPath = resolve('../../');

function resolve(p) {
   return path.resolve(__dirname, p)
}

module.exports = {
	packagesPath,
	routerPath,
	srcPath,
	libPath,
	tplPath,
	distPath,
	docsPath,
	uiPath: rootPath
};