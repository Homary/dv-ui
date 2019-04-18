import code from './src/code';
code.install = function (Vue) {
    Vue.component(code.name, code);
}
export default code;